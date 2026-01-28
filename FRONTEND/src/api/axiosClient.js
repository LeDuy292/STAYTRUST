import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // Handle specific error cases (e.g., 401 Unauthorized)
        if (error.response && error.response.status === 401) {
            // Clear token and redirect to login if needed
            // localStorage.removeItem('token');
            // window.location.href = '/auth';
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
