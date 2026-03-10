import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-forwarded-host', 'foo.bar.com')
  console.log(requestHeaders)

  return NextResponse.next({
    request: {
      headers: requestHeaders
    },
  })
}
 
 
export const config = {
  matcher: '/:path*',
}
