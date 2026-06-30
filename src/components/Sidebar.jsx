"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Newspaper,
  Tags,
  BarChart3,
  MapPin,
} from "lucide-react";

const menuItems = [
  {
    name: "Admins",
    icon: ShieldCheck,
    path: "/admins",
  },
  {
    name: "News Management",
    icon: Newspaper,
    path: "/news-management",
  },
  {
    name: "Categories",
    icon: Tags,
    path: "/categories",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
  name: "Locations",
  icon: MapPin,
  path: "/locations",
},
 
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#020817] border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-2xl">
            N
          </div>

          <div>
            <h1 className="text-white text-2xl font-bold">
              Newsly
            </h1>

            <p className="text-xs tracking-[4px] uppercase text-slate-500">
              Super Admin
            </p>
          </div>
        </div>
      </div>

      {/* Menus */}
      <div className="flex-1 px-4 py-5 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`
                flex items-center gap-3
                px-4 py-3 rounded-xl
                transition-all duration-300
                group

                ${
                  active
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }
              `}
            >
              <Icon
                size={20}
                className={`
                  transition-transform duration-300
                  group-hover:scale-110
                `}
              />

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Profile */}
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-900 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
              AR
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold">
                Aarav Rao
              </h3>

              <p className="text-xs text-slate-500">
                root@newsly.in
              </p>
            </div>
          </div>

          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
        </div>
      </div>
    </aside>
  );
}