import axios from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

service.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`
    return request
})

service.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized error
            // For example, redirect to login page or show an authentication modal
            console.log('Unauthorized error:', error);
            return window.location.href = '/login';
        }
        return Promise.reject(error);
    }
  );

export default service