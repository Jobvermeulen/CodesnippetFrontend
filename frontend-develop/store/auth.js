import { AUTH } from "@/constants/auth.constants";

const jwt = require("jsonwebtoken");

export const state = () => ({
    tokeType   : "Bearer",
    accessToken: "",
    expiresIn  : new Date(),

    reason: "",
    status: AUTH.STATUS_UNKNOWN,
});

export const actions = {

    isLoggedIn ({ state }) {
        return (
            state.status === AUTH.STATUS_LOGGED_IN
            && new Date(state.expiresIn).getTime() > Date.now()
        );
    },

    async getAccessToken ({ dispatch }) {
        if (new Date(this.state.auth.expiresIn).getTime() > Date.now()) {
            return "Bearer " + this.state.auth.accessToken;
        } else {
            console.log("Not valid anymore");
        }

        dispatch("logout", AUTH.UNKNOWN_SERVER_ERROR);
    },
    
    async login ({ commit, dispatch }, { username, password }){
        try {
            const response = await this.$axios.post(
                backendUrl("auth/login"), {
                    username: username,
                    password: password,
                },
            );

            commit("setAccessToken", {
                accessToken: response.data.accessToken,
                expiresIn  : response.data.expiresIn,
            });

            commit("setStatus", AUTH.STATUS_LOGGED_IN);
            dispatch("saveSession");
        } catch (error) {
            console.log(error);
        }
    },

    async loadSession ({ commit, dispatch }, localAuth) {
        await commit("setAuth", localAuth);
    },

    async initAuth ({ dispatch }) {
        const sessionDataOrFalse = await dispatch("hasSession");
        if (typeof sessionDataOrFalse === "object") {
            await dispatch("loadSession", sessionDataOrFalse);
        }
    },

    saveSession ({ state }) {
        localStorage.setItem(AUTH.LOCAL_STORAGE_KEY, JSON.stringify(
            {
                data   : {
                    accessToken     : state.accessToken,
                    expiresIn       : state.expiresIn,
                },
                expires: (Date.now() + AUTH.LOCAL_STORAGE_EXPIRY_TIME),
            },
        ));
    },

    hasSession ({ dispatch }) {
        var localAuth = localStorage.getItem(AUTH.LOCAL_STORAGE_KEY) || false;
        if (localAuth) {
            localAuth = JSON.parse(localAuth);
            if (
                Date.now() > localAuth.expires
                || Date.now() > (new Date(localAuth.data.expiresIn).getTime())
            ) {
                dispatch("logout", AUTH.SESSION_EXPIRED);
            } else {
                return localAuth.data;
            }
        }
        return false;
    },

    logout ({ commit, dispatch }, reason) {
        commit("setAccessToken", "", new Date());
        commit("setReason", reason);
        commit("setStatus", AUTH.STATUS_LOGGED_OUT);
        dispatch("clearSession");
    },

    async clearSession () {
        await localStorage.removeItem(AUTH.LOCAL_STORAGE_KEY);
        return this.$router.push(this.app.localePath('/auth/login'));
    },

    async getJwtPropertyFromToken ({ state }, property) {
        if (state.accessToken) {
            const payload = jwt.decode(state.accessToken);
            return payload[property];
        }

        return undefined;
    },
}

export const mutations = 
{
    setAccessToken (state, { accessToken, expiresIn }) {
        state.accessToken = accessToken;
        state.expiresIn = (
            expiresIn instanceof Date
                ? expiresIn
                : new Date(expiresIn)
        );
    },

    setReason (state, reason) {
        state.reason = reason;
    },

    setStatus (state, status) {
        state.status = status;
    },

    setAuth (state, data) {
        state.accessToken      = data.accessToken;
        state.expiresIn        = data.expiresIn;
        state.status           = AUTH.STATUS_LOGGED_IN;
    },
}

const backendUrl = (suffix) => {
    return `${process.env.backendUrl}/${suffix}`;
}
