import { defineNuxtConfig } from 'nuxt'
import fs from 'fs'

var getAllRoutesForPrerendering = () => {
    const routes = ['/snippets']
    const files = fs.readdirSync('./content/snippets')
    files.forEach(file => {
        const route = `/snippets/${file.replace('.md', '')}`
        routes.push(route)
    })
    return routes
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content','@nuxtjs/supabase', '@nuxt/content'],
    // content: {
    //     documentDriven: true,
    //     highlight: {
    //         themes: {
    //             default: 'github-light',
    //             dark: 'github-dark',
    //             light: 'github-light'
    //         },
    //         preload: ['javascript', 'css', 'dart'],
    //     }
    // },
    nitro: {
    prerender: {
      routes: getAllRoutesForPrerendering()
    }
    }
 
})







