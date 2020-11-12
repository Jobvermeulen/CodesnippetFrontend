<template>
    <div>
        <AppNav/>
        <AppResetPassword />
        <AppFooter />
    </div>
</template>

<script>
import { AUTH } from "@/constants/auth.constants";
import AppResetPassword from "@/components/auth/reset-password";
import AppNav from "@/components/uikit/nav";
import AppFooter from "@/components/uikit/footer";

export default {
    meta: {
        auth: { authority: AUTH.AUTH_LEVEL_GUEST }
    },
    components: {
        AppResetPassword,
        AppFooter,
        AppNav
    },
}
</script>