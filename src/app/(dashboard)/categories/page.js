"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Tags } from "lucide-react";
import { useCategories } from "@/hooks/useCategories";

export default function CategoriesPage() {
  const {
    categories,
    loading,
    fetchCategories,
    addCategory,
    removeCategory,
  } = useCategories();

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
    });

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await addCategory(formData);

      setFormData({
        name: "",
        description: "",
      });

      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this category?"
    );

    if (!confirmDelete) return;

    await removeCategory(id);
  };

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-purple-500",
  ];

  return (
    <div className="p-10 bg-[#f8f8f8] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-red-500 uppercase tracking-[5px] font-semibold">
            Taxonomy
          </p>

          <h1 className="text-6xl font-bold text-slate-900 mt-2">
            Categories
          </h1>

          <p className="text-gray-500 text-xl mt-3">
            Curate the beats that shape the feed.
            Rank, analyze and audit performance.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition"
        >
          <Plus size={18} />
          New Category
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-20 text-xl">
          Loading Categories...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {categories?.map(
            (item, index) => (
              
                <div
  key={item.category_id}
  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition"
>
                {/* Top Color */}
                <div
                  className={`h-2 ${
                    colors[
                      index %
                        colors.length
                    ]
                  }`}
                />

                <div className="p-8">
                  {/* Top */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-semibold">
                      {
                        item.category_number
                      }
                    </span>

                    <button
                      onClick={() =>
                        handleDelete(
                          item.category_id
                        )
                      }
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2
                        size={20}
                      />
                    </button>
                  </div>

                  {/* Category */}
                  <div className="mt-4">
                    <h2 className="text-4xl font-bold text-slate-900">
                      {
                        item.category_name
                      }
                    </h2>

                    <p className="text-gray-500 mt-3">
                      {
                        item.description
                      }
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-8">
                    <h3 className="text-5xl font-bold text-slate-900">
                      {
                        item.total_posts
                      }
                    </h3>

                    <p className="text-gray-500 text-lg">
                      posts published
                    </p>
                  </div>

                  {/* Share */}
                  <div className="mt-8">
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        Share
                      </span>

                      <span className="font-semibold text-gray-700">
                        {
                          item.share_percentage
                        }
                        %
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className={`h-2 rounded-full ${
                          colors[
                            index %
                              colors.length
                          ]
                        }`}
                        style={{
                          width: `${item.share_percentage}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Growth */}
                  <div className="mt-6 flex justify-end">
                    <span
                      className={`font-semibold text-lg ${
                        item.growth_percentage >
                        0
                          ? "text-green-600"
                          : item.growth_percentage <
                            0
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    >
                      {item.growth_percentage >
                      0
                        ? `↗ ${item.growth_percentage}%`
                        : item.growth_percentage <
                          0
                        ? `↘ ${Math.abs(
                            item.growth_percentage
                          )}%`
                        : "0%"}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}

      {/* Create Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[500px] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Tags
                className="text-orange-500"
                size={28}
              />

              <h2 className="text-3xl font-bold">
                Create Category
              </h2>
            </div>

            <form
              onSubmit={handleCreate}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Category Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              />

              <textarea
                placeholder="Description"
                rows={4}
                value={
                  formData.description
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description:
                      e.target.value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="px-5 py-3 border rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}