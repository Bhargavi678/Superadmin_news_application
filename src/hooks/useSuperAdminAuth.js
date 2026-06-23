import { useState } from "react";
import { superAdminLogin } from "@/services/superadmin_service";

export const useSuperAdminAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    console.log("HOOK CALLED");

    setLoading(true);

    try {
      const response = await superAdminLogin(
        email,
        password
      );

      return response;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
  };
};