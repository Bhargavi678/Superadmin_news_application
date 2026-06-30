"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Shield } from "lucide-react";
import { useSuperAdminAuth } from "@/hooks/useSuperAdminAuth";

export default function Home() {
  const router = useRouter();

  const { login, loading } = useSuperAdminAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  try {
    const response = await login(email, password);

console.log(response);

localStorage.setItem(
  "access_token",
  response.data.access_token
);

router.push("/admins");
  } catch (err) {
    console.error("Login Error:", err);

    setError(
      err.response?.data?.message ||
      "Invalid email or password"
    );
  }
};

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0f172a] border border-slate-800 rounded-3xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
            <Shield
              className="text-white"
              size={36}
            />
          </div>

          <h1 className="text-3xl font-bold text-white mt-4">
            Newsly
          </h1>

          <p className="text-slate-400 mt-2">
            Super Admin Login
          </p>
        </div>

        {error && (
          <div className="mb-4 bg-red-500/20 text-red-400 p-3 rounded-xl">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full h-12 px-4 pr-12 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:opacity-90"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}