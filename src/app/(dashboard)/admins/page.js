"use client";

import { useEffect, useState } from "react";
import { useAdmins } from "@/hooks/useAdmins";

export default function AdminsPage() {
  const {
    admins,
    loading,
    fetchAdmins,
    addAdmin,
  } = useAdmins();

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    aadhaar_file: null,
  });

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAdmin(formData);

      setShowModal(false);

      setFormData({
        name: "",
        email: "",
        password: "",
        address: "",
        aadhaar_file: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-red-500 font-semibold uppercase tracking-widest">
            Admin Operations
          </p>

          <h1 className="text-5xl font-bold mt-2">
            Admin Management
          </h1>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold"
        >
          + Create Admin
        </button>
      </div>

      {/* Table */}
      {/* Table */}
<div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
  <div className="px-6 py-5 border-b bg-gradient-to-r from-orange-50 to-red-50">
    <h2 className="text-xl font-semibold text-gray-800">
      Admins List
    </h2>
    <p className="text-sm text-gray-500 mt-1">
      Manage all registered admins and their statistics
    </p>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Admin
          </th>

          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Address
          </th>

          <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            Published
          </th>

          <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            Rejected
          </th>

          <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            Drafts
          </th>

          <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            Breaking
          </th>

          <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            Avg Views
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {loading ? (
          <tr>
            <td
              colSpan={7}
              className="text-center py-16 text-gray-500"
            >
              Loading Admins...
            </td>
          </tr>
        ) : admins?.length > 0 ? (
          admins.map((admin) => (
            <tr
              key={admin.admin_id}
              className="hover:bg-orange-50 transition"
            >
              {/* Admin */}
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
                    {admin.name?.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {admin.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {admin.email}
                    </p>
                  </div>
                </div>
              </td>

              {/* Address */}
              <td className="px-6 py-5 text-gray-600">
                {admin.address}
              </td>

              {/* Published */}
              <td className="px-6 py-5 text-center">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  {admin.published}
                </span>
              </td>

              {/* Rejected */}
              <td className="px-6 py-5 text-center">
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                  {admin.rejected}
                </span>
              </td>

              {/* Drafts */}
              <td className="px-6 py-5 text-center">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                  {admin.drafts}
                </span>
              </td>

              {/* Breaking */}
              <td className="px-6 py-5 text-center">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                  {admin.breaking}
                </span>
              </td>

              {/* Avg Views */}
              <td className="px-6 py-5 text-center font-semibold text-gray-800">
                {admin.avg_views}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={7}
              className="text-center py-16 text-gray-400"
            >
              No Admins Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>


      {/* Create Admin Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-[500px]">
            <h2 className="text-2xl font-bold mb-4">
              Create Admin
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3 rounded-lg"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded-lg"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full border p-3 rounded-lg"
                value={formData.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  })
                }
              />

              <input
                type="file"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    aadhaar_file:
                      e.target.files[0],
                  })
                }
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="border px-5 py-2 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-orange-500 text-white px-5 py-2 rounded-lg"
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