const mapping: Record<string, string> = {
  organizations: 'organization',
  'organization-members': 'organization_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
