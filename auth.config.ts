import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboardPage = nextUrl.pathname.startsWith('/dashboard')
      const isOnLoginPage = nextUrl.pathname.startsWith('/login')

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
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    }
  },
  providers: []
} satisfies NextAuthConfig
