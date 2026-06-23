"use client";

import { useEffect } from "react";
import { Trash2, Newspaper } from "lucide-react";
import { useNews } from "@/hooks/useNews";

export default function NewsManagementPage() {
  const {
    news,
    loading,
    fetchNews,
    removeNews,
  } = useNews();

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (newsId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this news?"
    );

    if (!confirmDelete) return;

    try {
      await removeNews(newsId);

      fetchNews();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            News Operations
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            News Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all news posted by admins
          </p>
        </div>

        <div className="bg-white px-5 py-3 rounded-xl border shadow-sm flex items-center gap-3">
          <Newspaper className="text-orange-500" />
          <span className="font-semibold">
            Total News: {news?.length || 0}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b bg-gradient-to-r from-orange-50 to-red-50">
          <h2 className="text-xl font-semibold text-gray-800">
            All News
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            View and manage all news articles
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                  Headline
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                  Admin
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                  Location
                </th>

                <th className="px-6 py-4 text-center text-xs font-bold uppercase text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-xs font-bold uppercase text-gray-500">
                  Views
                </th>

                <th className="px-6 py-4 text-center text-xs font-bold uppercase text-gray-500">
                  Breaking
                </th>

                <th className="px-6 py-4 text-center text-xs font-bold uppercase text-gray-500">
                  Date
                </th>

                <th className="px-6 py-4 text-center text-xs font-bold uppercase text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={9}
                    className="text-center py-16 text-gray-500"
                  >
                    Loading News...
                  </td>
                </tr>
              ) : news?.length > 0 ? (
                news.map((item) => (
                  <tr
                    key={item.news_id}
                    className="border-b hover:bg-orange-50 transition"
                  >
                    {/* Headline */}
                    <td className="px-6 py-5">
                      <div className="max-w-sm">
                        <p className="font-semibold text-gray-900">
                          {item.headline}
                        </p>
                      </div>
                    </td>

                    {/* Admin */}
                    <td className="px-6 py-5 font-medium">
                      {item.admin_name}
                    </td>

                    {/* Category */}
                    <td className="px-6 py-5">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-5">
                      {item.location}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status ===
                          "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Views */}
                    <td className="px-6 py-5 text-center font-semibold">
                      {item.views}
                    </td>

                    {/* Breaking */}
                    <td className="px-6 py-5 text-center">
                      {item.breaking_news ===
                      "Yes" ? (
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          Yes
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          No
                        </span>
                      )}
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5 text-center text-sm text-gray-600">
                      {item.date_time}
                    </td>

                    {/* Delete */}
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() =>
                          handleDelete(
                            item.news_id
                          )
                        }
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="text-center py-16 text-gray-400"
                  >
                    No News Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}