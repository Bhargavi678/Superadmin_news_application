import { useState } from "react";
import { superAdminLogin } from "@/services/superadmin_service";

export const useSuperAdminAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
  console.log("HOOK CALLED");

  setLoading(true);

  try {
    const response = await superAdminLogin(email, password);

    console.log("SERVICE RESPONSE:", response);

    return response;
  } catch (err) {
    console.log("HOOK ERROR:", err);
    throw err;
  } finally {
    setLoading(false);
  }
};

  return {
    login,
    loading,
  };
};