import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only protect /ops routes
  if (!request.nextUrl.pathname.startsWith('/ops')) {
    return NextResponse.next()
  }

  const authHeader = request.headers.get('authorization')

  if (!authHeader) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  const [scheme, encoded] = authHeader.split(' ')

  if (scheme !== 'Basic' || !encoded) {
    return new NextResponse('Invalid authentication', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
  const [user, pass] = decoded.split(':')

  const validUser = process.env.BASIC_AUTH_USER
  const validPass = process.env.BASIC_AUTH_PASS

  if (user !== validUser || pass !== validPass) {
    return new NextResponse('Invalid credentials', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/ops/:path*',
}
