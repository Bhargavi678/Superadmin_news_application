"use client";

import { MapPin, ArrowUpRight } from "lucide-react";
import { useLocations } from "@/hooks/useLocations";

export default function LocationsPage() {
  const { locations, loading } = useLocations();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const maxReaders = Math.max(
    ...locations.map((l) => l.active_readers),
    1
  );

  return (
    <div className="min-h-screen bg-[#faf8f5] p-10">

      {/* Heading */}

      <p className="uppercase tracking-[6px] text-red-500 font-semibold text-sm">
        Geography
      </p>

      <h1 className="mt-2 text-6xl font-serif font-bold text-slate-900">
        Locations
      </h1>

      <p className="mt-3 text-xl text-gray-500">
        Reader concentration, growth and breaking-news routing across cities and
        states.
      </p>

      {/* Card */}

      <div className="mt-12 rounded-[32px] border border-slate-200 bg-white overflow-hidden">

        <div className="flex items-center justify-between border-b px-10 py-8">

          <h2 className="text-4xl font-serif font-bold">
            Top Cities · Active Readers
          </h2>

          <span className="font-mono text-gray-500">
            {locations.length} regions
          </span>

        </div>

        <div className="space-y-5 p-8">

          {locations.map((item, index) => {

            const progress =
              (item.active_readers / maxReaders) * 100;

            return (

              <div
                key={index}
                className="flex items-center gap-6 rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm"
              >

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">

                  <MapPin
                    className="text-orange-500"
                    size={28}
                  />

                </div>

                {/* City */}

                <div className="w-64">

                  <h3 className="text-3xl font-semibold">
                    {item.city}
                  </h3>

                  <p className="text-gray-500 text-lg">
                    {item.state}
                  </p>

                </div>

                {/* Progress */}

                <div className="flex-1">

                  <div className="h-4 rounded-full bg-gray-200">

                    <div
                      className="h-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />

                  </div>

                </div>

                {/* Readers */}

                <div className="w-36 text-right">

                  <p className="text-4xl font-serif font-bold">

                    {item.active_readers >= 1000
                      ? `${Math.round(item.active_readers / 1000)}k`
                      : item.active_readers}

                  </p>

                </div>

                {/* Growth */}

                <div className="flex w-28 items-center justify-end gap-1 text-green-600 text-2xl font-semibold">

                  <ArrowUpRight size={22} />

                  {item.growth_percentage}%

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </div>
  );
}