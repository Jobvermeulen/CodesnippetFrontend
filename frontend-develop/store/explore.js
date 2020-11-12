export const state = () => ({
    snippets: [],
});

export const actions = {

    async getSnippets({commit}, page) {
        try {
            const response = await this.$api.get(backendUrl(`v1/snippets/explore/${page}`));

            if(200 <= response.status && response.status < 300) {
                commit("setSnippets", response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const mutations = {

    setSnippets(state, snippets) {
        state.snippets = snippets;
    }
}

const backendUrl = (suffix) => {
    return `${process.env.backendUrl}/${suffix}`;
}
