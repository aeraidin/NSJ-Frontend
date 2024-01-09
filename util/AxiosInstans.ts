import Cookies from "js-cookie";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  // withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add an interceptor to set the authorization header before each request
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if the token is available in your storage (localStorage, sessionStorage, etc.)
    const token = Cookies.get("userToken"); // Change 'yourAuthToken' to your actual token key

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
