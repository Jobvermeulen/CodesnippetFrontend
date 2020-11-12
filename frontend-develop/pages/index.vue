<template>
    <div>
        <AppNav/>
        <AppComingSoon/>
        <AppWhyCodesnippet/>
        <AppHowItWorks/>
        <AppWhoWeAre/>
        <AppFooter/>
    </div>
</template>

<script>
    import {AUTH} from "@/constants/auth.constants";
    import Logo from '~/components/Logo.vue'
    import AppNav from "@/components/uikit/nav";
    import AppFooter from "@/components/uikit/footer";
    import AppComingSoon from "@/components/homepage/comingSoon";
    import AppWhyCodesnippet from "@/components/homepage/whyCodesnippet";
    import AppHowItWorks from "@/components/homepage/howItWorks";
    import AppWhoWeAre from "@/components/homepage/whoWeAre";

    export default {
        meta: {
            auth: {authority: AUTH.AUTH_LEVEL_GUEST}
        },
        components: {
            Logo,
            AppNav,
            AppFooter,
            AppComingSoon,
            AppWhyCodesnippet,
            AppHowItWorks,
            AppWhoWeAre,
        }
    }
</script>

