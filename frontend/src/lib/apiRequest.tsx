import axios from "axios";

// Use Vite env variable if provided, otherwise fall back to the deployed URL.
const BASE = (import.meta as any).env?.VITE_API_BASE_URL || "https://medicruita-backend.onrender.com";

const apiRequest = axios.create({
  baseURL: `${BASE}/api`,
  headers: { "Content-Type": "application/json" }
});

// Request interceptor: attach token from localStorage if present
apiRequest.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore localStorage access errors in some environments
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401 Unauthorized globally
apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      try {
        localStorage.removeItem("token");
      } catch (e) {
        // ignore
      }
      // Redirect to login page. Use location.assign so it works outside React router
      if (typeof window !== "undefined") {
        window.location.assign("/login");
      }
    }
    return Promise.reject(error);
  }
);

export default apiRequest;