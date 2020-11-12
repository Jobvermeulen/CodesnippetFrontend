export const state = () => ({
    codeSnippet: {},
    snippet: {},
    languages: {},
    categories: {},
});

export const actions = {
    async createSnippet({}, codesnippet) {
        return await this.$api.post(backendUrl("v1/snippets"), codesnippet);
    },

    async getLanguages({commit}) {
        try {
            const response = await this.$api.get(backendUrl("v1/languages"));
            commit("setLanguages", response.data);
        } catch (e) {
            console.log(e);
        }
    },

    async getCategories({commit}) {
        try {
            const response = await this.$api.get(backendUrl("v1/categories"));
            commit("setCategories", response.data);
        } catch (e) {
            console.log(e);
        }
    },

    async getSnippet({commit}, codesnippetId) {
        try {
            const response = await this.$api.get(backendUrl("v1/snippets/" + codesnippetId));
            console.log(response.data);
            commit("setSnippet", response.data);
        } catch (e) {
            console.log(e);
        }
    },

    async updateSnippet({commit}, codesnippet) {
        console.log('will be send to the backend:',codesnippet);
        console.log(codesnippet.id);
        const response = await this.$api.patch(backendUrl("v1/snippets/" + codesnippet.id), codesnippet);
        console.log(response);
    },
}

export const mutations = {
    setLanguages(state, languages) {
        state.languages = languages;
    },

    setCategories(state, categories) {
        state.categories = categories;
    },

    setSnippet(state, snippet) {
        state.codeSnippet = snippet;
    },
}

const backendUrl = (suffix) => {
    return `${process.env.backendUrl}/${suffix}`;
}
