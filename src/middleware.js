let locales = ['de', 'es', 'en'];

// Get the preferred locale from the 'Accept-Language' header
function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language');
  const preferredLocale = acceptLanguage
    ? acceptLanguage.split(',')[0].split('-')[0] // Extracts the base language
    : 'de'; // Default locale

  // Check if the preferred locale is supported
  return locales.includes(preferredLocale) ? preferredLocale : 'de';
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the URL already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to the URL with the preferred locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: '/((?!_next|favicon.ico|robots.txt).*)',
};
