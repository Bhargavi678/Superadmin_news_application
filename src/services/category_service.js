// services/category_service.js

import axiosInstance from "@/lib/axios";
import { API_ROUTES } from "@/constants/apiroutes";

export const getCategories = async () => {
  const response = await axiosInstance.get(
    API_ROUTES.SUPER_ADMIN.GET_CATEGORIES
  );

  return response.data;
};

export const createCategory = async (
  data
) => {
  const response = await axiosInstance.post(
    API_ROUTES.SUPER_ADMIN.CREATE_CATEGORY,
    data
  );

  return response.data;
};

export const deleteCategory = async (
  categoryId
) => {
  const response =
    await axiosInstance.delete(
      API_ROUTES.SUPER_ADMIN.DELETE_CATEGORY(
        categoryId
      )
    );

  return response.data;
};