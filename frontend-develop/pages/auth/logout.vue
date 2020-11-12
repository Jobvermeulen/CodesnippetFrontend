<template>
</template>
<script>
    import {AUTH} from "@/constants/auth.constants";

    export default {
        meta: {
            auth: {authority: AUTH.AUTH_LEVEL_GUEST}
        },
        async mounted() {
            await this.$store.dispatch("auth/logout")
        }
    }
</script>
