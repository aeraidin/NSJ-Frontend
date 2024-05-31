/** @format */

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

axiosInstance.interceptors.request.use(
 (config) => {
  const token = Cookies.get("token");
  if (token) {
   config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
 },
 (error) => {
  return Promise.reject(error);
 }
);
axiosInstance.interceptors.response.use(
 (response) => {
  return response;
 },
 (error) => {
  if (error.response.status === 401) {
   Cookies.remove("token");
  }

  return Promise.reject(error);
 }
);

export default axiosInstance;
