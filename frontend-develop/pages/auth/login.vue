<template>
    <div>
        <AppNav/>
        <AppLoginForm />
        <AppFooter/>
    </div>
</template>

<script>
import { AUTH } from "@/constants/auth.constants";
import AppLoginForm from "@/components/auth/login-form";
import AppNav from "@/components/uikit/nav.vue";
import AppFooter from "@/components/uikit/footer.vue";

export default {
    meta: {
        auth: { authority: AUTH.AUTH_LEVEL_GUEST }
    },
    components: {
        AppLoginForm,
        AppNav,
        AppFooter,
    },
}
</script>
