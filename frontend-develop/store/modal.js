export const state = () => ({
    comingSoon: {
        state: false,
    },
});

export const actions = {

    async setComingSoonModal({commit}, bool) {
        try {
            commit("setComingSoonModal", bool);
        } catch (error) {
            console.log(error);
        }
    },

    async sendRemindMe({}, email) {
        try {
            const response = await this.$axios.post(backendUrl("v1/remindme"), {emailaddress: email});
            return 200 <= response.status && response.status < 300;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const mutations = {

    setComingSoonModal(state, bool) {
        state.comingSoon.state = bool;
    },
}

const backendUrl = (suffix) => {
    return `${process.env.backendUrl}/${suffix}`;
}
