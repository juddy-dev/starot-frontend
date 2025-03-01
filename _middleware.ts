// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('idToken'); 

  const protectedRoutes = ['login'];

  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

