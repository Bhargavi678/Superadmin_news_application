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
        <div className="relative"></div>
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
        

        {/* Notification */}
        
      </div>
    </header>
  );
}