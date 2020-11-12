<template>
    <div>
        <AppNav/>
        <div class="container mt-10">
            <h1>Make a new account</h1>

            <AppCreateAccount class="mt-5"/>
        </div>
        <AppFooter/>
    </div>
</template>
<script>
    import AppNav from "@/components/uikit/nav";
    import AppFooter from "@/components/uikit/footer";
    import AppCreateAccount from "@/components/auth/create-account-form";

    export default {
        components: {
            AppNav,
            AppFooter,
            AppCreateAccount
        }
    }
</script>
