import axiosInstance from "@/lib/axios";
import { API_ROUTES } from "@/constants/apiroutes";

export const getLocations = async () => {
  const response = await axiosInstance.get(
    API_ROUTES.SUPER_ADMIN.GET_LOCATIONS
  );

  return response.data;
};