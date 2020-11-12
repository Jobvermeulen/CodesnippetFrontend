import Vue from "vue";

export default async function ({ $axios, store, app }, inject)
{
    //Custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
            },
        },
        baseURL: process.env.backendUrl,
        timeout: 10000,
    });

    api.interceptors.request.use(async (config) => {
        config.headers.authorization = await store.dispatch("auth/getAccessToken");

        return config;
    });

    api.interceptors.response.use(
        response => response
        , async (error) => {
        // Check if the status is a 403 or 401 (which means your token expired)
        if (error.response.status === 403 || error.response.status === 401) {
            //Redirect and notify user
            app.router.push("/auth/login");
        }
        return;
    });

    // Inject to context as $api
    inject("api", api);
}