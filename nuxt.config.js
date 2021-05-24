export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "urusov-stroy",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/logos/logo.svg" }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'anzor9657@gmail.com',
      },
      smtp: {
        host: "smtp.timeweb.ru",
        port: 2525,
      },
    }],
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/text.scss",
    "~/assets/scss/layout.scss",
    "~/assets/scss/usefull.scss",
    "~/assets/scss/animations.scss",
    "~/assets/scss/custom.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    routes: ['/', '/interior-design', '/architectural-design', '/construction', '/salon', '/cabinet-furniture']
  },
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  }
};
