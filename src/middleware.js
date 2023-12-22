// import { getSession } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const id = path.replace('/my-mindmap/', '');
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/mindmaps/${id}`);
  const data = await response.json();
  let status = 0;
  if (data?.status) {
    status = parseInt(data.status);
  }
  if (status === 0) {
    // const user = await getSession();
    // if (!user) {
    //   return NextResponse.rewrite(new URL('/api/auth/login', request.url));
    // }
  }
}

export const config = {
  matcher: ['/my-mindmap/:path*'],
};
