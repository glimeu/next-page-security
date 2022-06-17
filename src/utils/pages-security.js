import { ROLES } from './roles';

const pagesSecurity = {
  '/': {
    roles: [],
  },
  '/signin': {
    roles: [],
  },
  '/signup': {
    roles: [],
  },
  '/dashboard': {
    roles: [ROLES.USER, ROLES.ADMIN],
  },
  '/students': {
    roles: [ROLES.ADMIN],
  },
  '/course': {
    roles: [ROLES.USER, ROLES.ADMIN],
  },
  '/course/[class]': {
    roles: [ROLES.USER, ROLES.ADMIN],
  },
  '/denied': {
    roles: [],
  },
};

export function getPageSecurity(path, roles) {
  const pageSecurity = pagesSecurity[path];

  if (!pageSecurity) {
    throw new Error(`No page security found for ${path}`);
  }

  if (pageSecurity.roles.length === 0) {
    return true;
  }

  return pageSecurity.roles.some((role) => roles.includes(role));
}
