<template>
    <div>
        <AppNav/>
        <div class="container mt-10">
            <h1>Your codesnippets</h1>
            <ul>
                <li>
                    <n-link class="nav-link" :to="localePath('/codesnippet/explore')">Explore</n-link>
                </li>
                <li>
                    <n-link class="nav-link" :to="localePath('/codesnippet/create')">Create snippet</n-link>
                </li>
                <li>
                    <n-link class="nav-link" :to="localePath('/codesnippet/123456')">View snippet</n-link>
                </li>
                <li>
                    <n-link class="nav-link" :to="localePath('/codesnippet/edit/123456')">Edit snippet</n-link>
                </li>
            </ul>
        </div>
        <AppFooter/>
    </div>
</template>

<script>
    import {AUTH} from "@/constants/auth.constants";
    import AppNav from "@/components/uikit/nav.vue";
    import AppFooter from "@/components/uikit/footer.vue";
    import AppEditor from "@codesnippet/editor";

    export default {
        meta: {
            auth: {authority: AUTH.AUTH_LEVEL_USER}
        },
        components: {
            AppNav,
            AppFooter,
            AppEditor,
        },
    }
</script>
