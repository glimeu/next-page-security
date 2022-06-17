import { NextResponse } from 'next/server';

import { getPageSecurity } from '../utils/pages-security';
import { ROLES } from '../utils/roles';

export default function handler(request, event) {
  const path = request.page.name;

  if (!path) {
    console.error('No page found', request.url);

    return NextResponse.next();
  }

  try {
    const pageSecurity = getPageSecurity(path, [ROLES.ADMIN]);

    // if (!pageSecurity) {
    //   return NextResponse.redirect(new URL('/denied', request.url));
    // }
  } catch (error) {
    console.error('Error getting page security', path);

    return new Response('Internal Server Error', { status: 500 });
  }

  return NextResponse.next();
}
