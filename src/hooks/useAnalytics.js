"use client";

import { useState } from "react";
import { getAnalytics } from "@/services/analytics_service";

export const useAnalytics = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const fetchAnalytics =
    async () => {
      try {
        setLoading(true);

        const response =
          await getAnalytics();

        setAnalytics(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return {
    analytics,
    loading,
    fetchAnalytics,
  };
};