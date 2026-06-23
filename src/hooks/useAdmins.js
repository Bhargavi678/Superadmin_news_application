"use client";

import { useState } from "react";
import {
  getAllAdmins,
  createAdmin,
} from "@/services/admiin_page_service";

export const useAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Admins
  const fetchAdmins = async () => {
    try {
      setLoading(true);

      const response = await getAllAdmins();

      setAdmins(response.data || []);

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Create Admin
  const addAdmin = async (adminData) => {
    try {
      setLoading(true);

      const response = await createAdmin(
        adminData
      );

      await fetchAdmins();

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    admins,
    loading,
    fetchAdmins,
    addAdmin,
  };
};