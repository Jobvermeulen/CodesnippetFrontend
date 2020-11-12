import Vue from "vue";

const redirectPageWhenLoggedIn = [
    "/auth/login",
];

export default async ({store, redirect, route}) => {
    await store.dispatch("auth/initAuth");
    const isLoggedIn = await store.dispatch("auth/isLoggedIn");

    if (isLoggedIn) {
        await store.dispatch("users/getLoggedInUser");
    }

    // Check if user has correct access role
    if (route.meta.length >= 1) {
        if ("auth" in route.meta[0]) {
            const authorizationLevel = route.meta[0].auth.authority ?? "0";

            if (authorizationLevel > store.state.users.role) {
                return redirect({name: "error-403"});
            }
        }
    }
}
