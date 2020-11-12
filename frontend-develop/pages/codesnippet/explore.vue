<template>
    <div>
        <AppNav/>
        
        <AppExplore />

        <AppFooter/>
    </div>
</template>

<script>
    import { AUTH } from "@/constants/auth.constants";
    import AppNav from "@/components/uikit/nav.vue";
    import AppFooter from "@/components/uikit/footer.vue";
    import AppExplore from "@/components/codesnippet/explore";

    export default {
        meta: {
            auth: { authority: AUTH.AUTH_LEVEL_USER }
        },
        components: {
            AppNav,
            AppFooter,
            AppExplore
        },
    }
</script>
