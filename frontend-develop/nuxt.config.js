require("dotenv").config();

export default {
    mode  : "spa",
    server: {
        port: process.env.FRONTEND_NUXT_PORT || 3000,
        host: "0.0.0.0",
    },
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fbfeff' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        "~/plugins/axios",
        {
            src: "~/plugins/vue-notification",
            mode: 'client'
        },
        "~/plugins/directives",
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/moment',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        'bootstrap-vue/nuxt',
        'nuxt-i18n',
    ],

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-US.js'
            },
            {
                code: 'nl',
                file: 'nl.js'
            },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: {
                    welcome: 'Welcome'
                },
                nl: {
                    welcome: 'Welkom'
                }
            }
        }
    },
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.backendUrl,
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        bootstrapVue: {
            bootstrapCSS: false, // Or `css: false`
            bootstrapVueCSS: false // Or `bvCSS: false`
        },
        extend (config, ctx) {
        }
    },
    env: {
        backendUrl: process.env.BACKEND_BASE_URL
    },
}
