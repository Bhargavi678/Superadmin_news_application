import axiosInstance from "@/lib/axios";
import { API_ROUTES } from "@/constants/apiroutes";

export const superAdminLogin = async (email, password) => {
    console.log("SERVICE CALLED");
  try {
    const formData = new URLSearchParams();

    formData.append("email", email);
    formData.append("password", password);

    const response = await axiosInstance.post(
      API_ROUTES.SUPER_ADMIN.LOGIN,
      formData,
      {
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Super Admin Login Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};