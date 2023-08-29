import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

service.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`
    return request
})


export default service