<template>
    <div>
        <AppNav/>
        <div class="container mt-10">
            <h1>This page was not found!</h1>

            <n-link to="/" class="mx-auto mt-5">Back to homepage!</n-link>
        </div>
        <AppFooter/>
    </div>
</template>
<script>
    import AppNav from "@/components/uikit/nav";
    import AppFooter from "@/components/uikit/footer";

    export default ({
        components: {
            AppNav,
            AppFooter
        }
    });
</script>
