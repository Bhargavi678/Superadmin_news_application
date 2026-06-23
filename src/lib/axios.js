import axios from "axios";

console.log(
  "API URL:",
  process.env.NEXT_PUBLIC_API_BASE_URL
);

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("access_token");

    console.log("TOKEN =", token);

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export default axiosInstance;