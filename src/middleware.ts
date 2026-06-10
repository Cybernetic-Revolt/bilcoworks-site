import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only protect /ops routes (except login page)
  if (!request.nextUrl.pathname.startsWith('/ops')) {
    return NextResponse.next()
  }

  // Allow access to login page
  if (request.nextUrl.pathname === '/ops/login') {
    return NextResponse.next()
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('ops_auth')

  if (authCookie?.value !== 'authenticated') {
    // Redirect to login page
    return NextResponse.redirect(new URL('/ops/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/ops/:path*',
}
