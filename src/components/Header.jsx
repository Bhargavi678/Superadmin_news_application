"use client";

import {
  Search,
  Moon,
  Bell,
  ChevronLeft,
  Command,
} from "lucide-react";

export default function Header() {
  return (
    <header className="h-22 bg-[#f8f6f5] border-b border-gray-200 flex items-center justify-between px-8">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Back Button */}
        <button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50">
          <ChevronLeft size={24} className="text-gray-600" />
        </button>

        {/* Search */}
        <div className="relative w-[700px]">
          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search admins, posts, users, logs..."
            className="w-full h-14 rounded-3xl border border-gray-300 bg-white pl-14 pr-24 text-xl outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-1 bg-gray-50">
            <Command size={16} />
            <span className="text-sm text-gray-600">K</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Status */}
        <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="text-gray-600 text-lg">
            All systems
          </span>

          <span className="text-green-600 font-semibold text-lg">
            operational
          </span>
        </div>

        {/* Theme */}
        <button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50">
          <Moon size={22} className="text-gray-600" />
        </button>

        {/* Notification */}
        <button className="relative w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50">
          <Bell size={22} className="text-gray-600" />

          <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}