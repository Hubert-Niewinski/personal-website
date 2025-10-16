import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function isProductionEnv() {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv) {
    return vercelEnv === 'production';
  }

  return process.env.NODE_ENV === 'production';
}

function shouldSkipAuth() {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  if (isProductionEnv()) {
    return true;
  }

  const username = process.env.PREVIEW_AUTH_USER;
  const password = process.env.PREVIEW_AUTH_PASS;

  return !username || !password;
}

function unauthorizedResponse() {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Preview", charset="UTF-8"',
    },
  });
}

export function middleware(request: NextRequest) {
  if (shouldSkipAuth()) {
    return NextResponse.next();
  }

  const username = process.env.PREVIEW_AUTH_USER as string;
  const password = process.env.PREVIEW_AUTH_PASS as string;

  const authHeader = request.headers.get('authorization') || '';
  const [scheme, encoded] = authHeader.split(' ');

  if (scheme === 'Basic' && encoded) {
    try {
      const decoded = atob(encoded);
      const separatorIndex = decoded.indexOf(':');

      if (separatorIndex !== -1) {
        const providedUser = decoded.slice(0, separatorIndex);
        const providedPassword = decoded.slice(separatorIndex + 1);

        if (providedUser === username && providedPassword === password) {
          return NextResponse.next();
        }
      }
    } catch {
      // If decoding fails, fall through to unauthorized response
    }
  }

  return unauthorizedResponse();
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico).*)'],
};
