// src/services/superadmin_service.js

import axiosInstance from "@/lib/axios";
import { API_ROUTES } from "@/constants/apiroutes";

// GET ALL ADMINS
export const getAllAdmins = async () => {
  try {
    const response = await axiosInstance.get(
      API_ROUTES.SUPER_ADMIN.GET_ADMINS
    );

    return response.data;
  } catch (error) {
    console.error(
      "Get Admins Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// CREATE ADMIN
export const createAdmin = async (data) => {
  try {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("address", data.address);
    formData.append("aadhaar_file", data.aadhaar_file);

    const response = await axiosInstance.post(
      API_ROUTES.SUPER_ADMIN.CREATE_ADMIN,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Create Admin Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};