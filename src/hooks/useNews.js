"use client";

import { useState } from "react";

import {
  getAllNews,
  deleteNews,
} from "@/services/news_service";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] =
    useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);

      const response =
        await getAllNews();

      setNews(response.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeNews = async (newsId) => {
    try {
      await deleteNews(newsId);

      setNews((prev) =>
        prev.filter(
          (item) =>
            item.news_id !== newsId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    news,
    loading,
    fetchNews,
    removeNews,
  };
};