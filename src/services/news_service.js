import axiosInstance from "@/lib/axios";
import { API_ROUTES } from "@/constants/apiroutes";

// Get All News
export const getAllNews = async () => {
  try {
    const response = await axiosInstance.get(
      API_ROUTES.SUPER_ADMIN.GET_NEWS
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get News Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// Delete News
export const deleteNews = async (newsId) => {
  try {
    const response = await axiosInstance.delete(
      API_ROUTES.SUPER_ADMIN.DELETE_NEWS(
        newsId
      )
    );

    return response.data;
  } catch (error) {
    console.error(
      "Delete News Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};