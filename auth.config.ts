import { ROUTE_PATHS } from '@/app/lib/constants'
import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: ROUTE_PATHS.login
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboardPage = nextUrl.pathname.startsWith(
        ROUTE_PATHS.dashboard
      )
      const isOnLoginPage = nextUrl.pathname.startsWith(ROUTE_PATHS.login)

      if (isOnLoginPage) {
        const callbackUrl = nextUrl.searchParams.get('callbackUrl')

        if (isLoggedIn && callbackUrl) {
          return Response.redirect(callbackUrl)
        }
      }

      if (isOnDashboardPage) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL(ROUTE_PATHS.dashboard, nextUrl))
      }
      return true
    }
  },
  providers: []
} satisfies NextAuthConfig
