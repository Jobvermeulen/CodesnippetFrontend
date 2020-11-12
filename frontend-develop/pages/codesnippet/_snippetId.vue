<template>
    <div>
        <AppNav/>
        <AppCodesnippetView/>
        <AppFooter/>
    </div>
</template>

<script>
    import {AUTH} from "@/constants/auth.constants";
    import AppNav from "@/components/uikit/nav.vue";
    import AppFooter from "@/components/uikit/footer.vue";
    import AppCodesnippetView from "@/components/codesnippet/view.vue";

    export default {
        meta: {
            auth: {authority: AUTH.AUTH_LEVEL_USER}
        },
        components: {
            AppNav,
            AppFooter,
            AppCodesnippetView,
        },
    }
</script>
