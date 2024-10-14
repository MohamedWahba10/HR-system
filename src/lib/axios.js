import Axios from "axios";

// Determine base URL based on environment
const environment = import.meta.env.VITE_ENV;  // Using Vite environment variable
let baseURL;

if (environment === 'admin') {
  baseURL = "http://localhost:8000/admin"; // Example admin base URL
} else {
  baseURL = "http://localhost:8000/client"; // Example client base URL
}

// Create Axios instance with dynamic baseURL
const axios = Axios.create({
  baseURL, // Use the dynamic baseURL
  timeout: 60000,
  withCredentials: true,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  headers: {
    Accept: "application/json"
  }
});

// Add response interceptor to handle errors globally
axios.interceptors.response.use(
  null,
  (err) => {
    const error = {
      status: err.response?.status,
      original: err,
      validation: {},
      message: null
    };

    if (err.response?.status === 422) {
      for (let field in err.response.data.errors) {
        error.validation[field] = err.response.data.errors[field][0];
      }
    } else {
      error.message = "Something Bad happened";
    }

    return Promise.reject(error);
  }
);

export default axios;
