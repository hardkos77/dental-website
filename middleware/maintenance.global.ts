import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from '#app'

const BYPASS_COOKIE = 'maintenance_bypass'

export default defineNuxtRouteMiddleware((to) => {
    if (import.meta.prerender) return

    const cfg = useRuntimeConfig().public as any
    const enabled: boolean = !!cfg.maintenanceEnabled
    const bypassToken: string = String(cfg.maintenanceBypassToken || '')

    if (!enabled) return
    if (to.path === '/maintenance') return

    // Bypass via query
    const qBypass = typeof to.query?.bypass === 'string' ? String(to.query?.bypass) : ''
    if (bypassToken && qBypass && qBypass === bypassToken) return

    // Bypass via cookie
    if (process.client) {
        const hasBypass = document.cookie.split('; ').some(c => c.startsWith(`${BYPASS_COOKIE}=`))
        if (hasBypass) return
    }

    return navigateTo('/maintenance', { redirectCode: 302 })
})

