import { NextRequest } from 'next/server';
import { auth } from '@/lib/authentication/auth';
import createIntlMiddleware from 'next-intl/middleware';
import { i18nConfig } from './i18nConfig';
import { publicPages } from './routes';

const intlMiddleware = createIntlMiddleware(i18nConfig);

const intl = async (req: NextRequest) => {
  return intlMiddleware(req);
};

const authMiddleware = auth(async (req) => {
  const newUrl = new URL('/home', req.nextUrl.origin);
  // console.log("***************");
  // console.log(req.auth);
  // console.log("***************");

  if (req.auth?.user) {
    // console.log("********************");
    // console.log(req.auth?.user);
    // console.log("********************");
    return intl(req);
  } else {
    // console.log("********************");
    // console.log("Not authenticated");
    // console.log("********************");
    return intl(req).then(() => {
      return Response.redirect(newUrl);
    });
  }
});

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${i18nConfig.locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})(?:/.*)?$`,
    'i'
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    // console.log("********************");
    // console.log("public");
    // console.log("********************");
    return intlMiddleware(req);
  } else {
    // console.log("********************");
    // console.log("not public");
    // console.log("********************");

    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
