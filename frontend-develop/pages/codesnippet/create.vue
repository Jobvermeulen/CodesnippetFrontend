<template>
    <div>
        <AppNav/>
            <div class="container mt-10">
                <h1>Create a new codesnippet</h1>

                <div>
                    <AppCodesnippetForm/>
                </div>
            </div>
        <AppFooter/>
    </div>
</template>

<script>
    import { AUTH } from "@/constants/auth.constants";
    import AppNav from "@/components/uikit/nav.vue";
    import AppFooter from "@/components/uikit/footer.vue";
    import AppCodesnippetForm from "@/components/codesnippet/codesnippet-form.vue";

    export default {
        meta: {
            auth: { authority: AUTH.AUTH_LEVEL_USER }
        },
        components: {
            AppNav,
            AppFooter,
            AppCodesnippetForm
        },
    }
</script>
