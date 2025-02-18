// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.role === "ADMIN";
      },
    },
  }
);

export const config = {
  matcher: ["/Dashboard/:path*"]
};