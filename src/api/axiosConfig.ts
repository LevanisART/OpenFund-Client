import axios from "axios";
const apiURL = import.meta.env.VITE_APP_API_URL;

const axiosClient = axios.create({
  baseURL: new URL(apiURL).toString(),
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

axiosClient.interceptors.response.use(
  (val) => val,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(err);
  }
);

export default axiosClient;
