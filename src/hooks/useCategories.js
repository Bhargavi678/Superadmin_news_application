// hooks/useCategories.js

"use client";

import { useState } from "react";

import {
  getCategories,
  createCategory,
  deleteCategory,
} from "@/services/category_service";

export const useCategories = () => {
  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const fetchCategories =
    async () => {
      try {
        setLoading(true);

        const response =
          await getCategories();

        setCategories(
          response.data || []
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const addCategory = async (
    data
  ) => {
    try {
      await createCategory(data);

      fetchCategories();
    } catch (error) {
      throw error;
    }
  };

  const removeCategory =
    async (categoryId) => {
      try {
        await deleteCategory(
          categoryId
        );

        setCategories((prev) =>
          prev.filter(
            (item) =>
              item.category_id !==
              categoryId
          )
        );
      } catch (error) {
        throw error;
      }
    };

  return {
    categories,
    loading,
    fetchCategories,
    addCategory,
    removeCategory,
  };
};