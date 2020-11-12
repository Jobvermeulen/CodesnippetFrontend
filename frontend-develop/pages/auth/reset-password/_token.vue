<template>
    <div>
        <AppNav/>
        <AppNewPassword />
        <AppFooter />
    </div>
</template>

<script>
import { AUTH } from "@/constants/auth.constants";
import AppNewPassword from "@/components/auth/new-password";
import AppNav from "@/components/uikit/nav";
import AppFooter from "@/components/uikit/footer";

export default {
    meta: {
        auth: { authority: AUTH.AUTH_LEVEL_GUEST }
    },
    components: {
        AppNewPassword,
        AppFooter,
        AppNav
    },
}
</script>