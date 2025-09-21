export interface IRoute {
    path: string;
    component: React.ComponentType<any>;
    requiresAuth: boolean;
  }