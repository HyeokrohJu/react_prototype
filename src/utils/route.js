export const routeParse = child => {
  return child.map(route => ({
    ...route,
    element: <route.element />,
    children: route.children ? routeParse(route.children) : undefined,
  }));
};
