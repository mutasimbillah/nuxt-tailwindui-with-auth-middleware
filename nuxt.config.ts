// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss',
    ],
    runtimeConfig: {
      public: {
        baseURL: process.env.BASE_URL || 'https://wehatbazar.thecell.tech/api',
      },
    },  
    app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'We Hat Bazar',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'description', content: 'My amazing site.' }
        ],
        bodyAttrs: {
          class: 'h-full'
        },
        htmlAttrs:{
          class:"h-full bg-gray-100"
        }
        
      }
    }
})
