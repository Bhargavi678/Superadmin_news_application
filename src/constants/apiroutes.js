// src/constants/apiroutes.js

export const API_ROUTES = {
  SUPER_ADMIN: {
    LOGIN: "/superadmin/auth/login",
    GET_ADMINS: "/superadmin/auth/admins",
    CREATE_ADMIN: "/superadmin/auth/create-admin",
     GET_NEWS: "/superadmin/news",

    DELETE_NEWS: (id) =>
      `/superadmin/news/${id}`,
     GET_CATEGORIES: "/superadmin/categories/",
  
  CREATE_CATEGORY: "/superadmin/categories/",
  
  DELETE_CATEGORY: (id) =>
    `/superadmin/categories/${id}`,
  GET_ANALYTICS: "/superadmin/analytics",
  },
};