<template>
    <div>
        <AppNav/>
        <div class="container mt-10">
            <h1>Edit codesnippets</h1>
            <b-spinner v-if="loading"/>
            <AppCodesnippetForm :edit_Mode="true" :edit_CodeSnippet="codeSnippet" v-else/>
        </div>
        <AppFooter/>
    </div>
</template>

<script>
    import {AUTH} from "@/constants/auth.constants";
    import AppNav from "@/components/uikit/nav.vue";
    import AppFooter from "@/components/uikit/footer.vue";
    import AppCodesnippetForm from "@/components/codesnippet/codesnippet-form.vue";
    import NuxtLoading from "../../../.nuxt/components/nuxt-loading";

    export default {
        meta: {
            auth: {authority: AUTH.AUTH_LEVEL_USER}
        },
        data() {
            return {
                loading: true,
                codeSnippet: {},
            }
        },
        components: {
            NuxtLoading,
            AppNav,
            AppFooter,
            AppCodesnippetForm,
        },
        async mounted() {

            if (this.$route.params.snippetId) {
                // Get snippet id form url
                const snippetId = this.$route.params.snippetId;
                // Get the right codesnippet
                await this.$store.dispatch('snippet/getSnippet', snippetId);
                this.codeSnippet = await this.$store.state.snippet.codeSnippet;

                // Loading is over (all elements on page can be rendered
                this.loading = false;
            }
        }
    }
</script>
