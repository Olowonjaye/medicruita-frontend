import axios from "axios";

// Use Vite env variable if provided. Support both VITE_API_URL (preferred) and
// VITE_API_BASE_URL (fallback for older setups). If none provided, fall back
// to the deployed Render URL.
const metaEnv = (import.meta as any).env || {};
// prefer VITE_API_URL, fall back to VITE_API_BASE_URL, otherwise use deployed URL
let BASE: string = metaEnv.VITE_API_URL || metaEnv.VITE_API_BASE_URL || "https://medicruita-backend.onrender.com";
// remove trailing slash if present to avoid double slashes when building baseURL
if (BASE.endsWith('/')) BASE = BASE.slice(0, -1);

// If running in local development (browser on localhost) and no VITE_API_URL was provided,
// prefer the local backend at http://localhost:5000 so dev frontend talks to your local server
// instead of the deployed backend. This avoids 404s when the deployed backend path differs.
try {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const noExplicitBase = !metaEnv.VITE_API_URL && !metaEnv.VITE_API_BASE_URL;
    if ((host === 'localhost' || host === '127.0.0.1') && noExplicitBase) {
      BASE = 'http://localhost:5000';
    }
  }
} catch (e) {
  // ignore access errors in non-browser environments
}

// Helpful debug during local development
if (metaEnv.MODE === 'development') {
  // eslint-disable-next-line no-console
  console.info(`[apiRequest] using API base: ${BASE}`);
}

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
    try {
      // Ensure each outgoing request has an x-request-id for tracing.
      if (config && config.headers) {
        // preserve any existing x-request-id if present
        if (!config.headers['x-request-id'] && !config.headers['X-Request-Id']) {
          const id = `req-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
          config.headers['x-request-id'] = id;
        }
      }
    } catch (e) {
      // ignore
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