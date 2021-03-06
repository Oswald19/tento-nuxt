module.exports = () => {

const pkg = require('./package')

  return {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
      title: 'Tento',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '新たな学生コミュニティ' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Tento'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://tento.app'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Tento'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '新たな学生コミュニティ'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/logo.png'
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: '@tento_app'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [,
      '@nuxtjs/pwa'
    ],

    /*
    ** Build configuration
    */
    build: {
      /*
      ** You can extend webpack config here
      */
    filenames: {
        app: '[name].js',
        chunk: '[name].js'
      },
      extend(config, ctx) {
        
      }
    }
  }
}