"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({
  active,
  payload,
  label,
}) => {
  if (
    active &&
    payload &&
    payload.length
  ) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border px-8 py-6">
        <h3 className="text-4xl font-medium text-slate-900">
          {label}
        </h3>

        <p className="text-3xl text-red-500 mt-3">
          visitors : {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

export default function AnalyticsPage() {
  const {
    analytics,
    loading,
    fetchAnalytics,
  } = useAnalytics();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  if (!analytics) return null;

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      {/* Heading */}
      <div className="mb-10">
        <p className="uppercase tracking-[5px] text-red-500 font-semibold">
          Realtime Intelligence
        </p>

        <h1 className="text-6xl font-bold text-slate-900 mt-2">
          Advanced Analytics
        </h1>

        <p className="text-slate-500 text-xl mt-4">
          Live visitors, retention,
          language and engagement
          intelligence.
        </p>
      </div>

      {/* Main Chart Card */}
      <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
        <div>
          <p className="uppercase tracking-[4px] text-slate-500 text-sm">
            Live Visitors
          </p>

          <h2 className="text-7xl font-bold text-slate-900 mt-3">
            {
              analytics.live_visitors
            }
          </h2>

          <div className="flex items-center gap-3 mt-3">
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="text-green-600 font-semibold text-xl">
              +18.4%
            </span>

            <span className="text-slate-500 text-xl">
              vs same time yesterday
            </span>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-10 h-[500px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <AreaChart
              data={
                analytics.hourly_views
              }
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <defs>
                <linearGradient
                  id="viewsGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#ef4444"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="95%"
                    stopColor="#ef4444"
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="5 5"
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="hour"
                tick={{
                  fill: "#64748b",
                }}
              />

              <YAxis
                tick={{
                  fill: "#64748b",
                }}
              />

              <Tooltip
                content={
                  <CustomTooltip />
                }
                cursor={{
                  stroke:
                    "#d1d5db",
                  strokeWidth: 2,
                }}
              />

              <Area
                type="monotone"
                dataKey="views"
                stroke="#ef4444"
                strokeWidth={4}
                fill="url(#viewsGradient)"
                activeDot={{
                  r: 8,
                  fill: "#ef4444",
                  stroke:
                    "#ffffff",
                  strokeWidth: 3,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        {/* Categories */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-2xl font-bold mb-5">
            Top Categories
          </h2>

          {analytics.top_categories.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b"
              >
                <span>
                  {
                    item.category_name
                  }
                </span>

                <span className="font-bold">
                  {
                    item.total_posts
                  }
                </span>
              </div>
            )
          )}
        </div>

        {/* Locations */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-2xl font-bold mb-5">
            Top Locations
          </h2>

          {analytics.top_locations.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b"
              >
                <span>
                  {item.location}
                </span>

                <span className="font-bold">
                  {
                    item.total_news
                  }
                </span>
              </div>
            )
          )}
        </div>

        {/* Admins */}
        <div className="bg-white rounded-3xl border p-6">
          <h2 className="text-2xl font-bold mb-5">
            Top Admins
          </h2>

          {analytics.top_admins.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b"
              >
                <span>
                  {
                    item.admin_name
                  }
                </span>

                <span className="font-bold">
                  {
                    item.total_news
                  }
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}