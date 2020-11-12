export const state = () => ({
    users: [],
    userId: "",
    username: "",
    fullName: "",
    role: 0, // 0 equals guest see AUTH CONSTANTS,
    tokenData: {},
});

export const actions = {

    async getAll({commit, dispatch}) {
        try {
            const response = await this.$api.get(backendUrl("v1/users"));

            if (200 <= response.status && response.status < 300) {
                commit("setUsers", response.data);
            }
        } catch (error) {
            console.log(error);
        }
    },

    async getLoggedInUser({commit, dispatch}) {
        const user = await dispatch("auth/getJwtPropertyFromToken", "user", {root: true});

        if (typeof user === "undefined") {
            return false;
        }

        commit(
            "setLoggedInUser",
            {
                userId: user.id,
                username: user.username,
                fullName: user.fullName,
                role: user.role.id,
            },
        );
    },

    async createUser({}, user) {
        try {
            return await this.$axios.post(backendUrl("v1/users"), user)
        } catch (error) {
            console.log(error);
        }
    },

    async checkValueForExistence({}, value) {
        const result = await this.$axios.get(backendUrl(`v1/users/check/${value}`))
            .catch(e => {
                console.log(e.response);
            });

        return result.data;
    },

    async resetPassword({}, email) {
        try {
            await this.$axios.post(
                backendUrl("v1/users/reset-password"), {
                    email: email
                },
            );
        } catch (error) {
            console.log(error);
        }
    },

    async getTokenData({ commit }, token) {
        const result = await this.$axios.get(backendUrl(`v1/users/reset-password/${token}`))
            .catch(e => {
                console.log(e.response);
            });

        return result.data;
    },

    async updatePassword({}, body) {
        console.log(body);
        
        try {
            await this.$axios.patch(backendUrl("v1/users/reset-password"), body);
        } catch (error) {
            console.log(error);
        }
    }
}

export const mutations = {

    setUsers(state, users) {
        state.users = users;
    },

    setLoggedInUser(state, {userId, username, fullName, role}) {
        state.userId = userId;
        state.username = username;
        state.fullName = fullName;
        state.role = role;
    },

}

const backendUrl = (suffix) => {
    return `${process.env.backendUrl}/${suffix}`;
}
