import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/decide(.*)',
  '/registration-form(.*)',
]);
const isNotSignInRoute = createRouteMatcher([
  '/home(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {

    // Add custom logic to run before redirecting

    return auth().redirectToSignIn();
  }
  if (isNotSignInRoute(req)) {

    // Add custom logic to run before redirecting
 const orgSelection = new URL("/dashboard/student", req.url);
      return NextResponse.redirect(orgSelection);
  }
});

export const config = { matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']};