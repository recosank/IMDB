import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('imdbProfile')){
        const token = localStorage.getItem('imdbProfile')
        req.headers.Authorization = `Bearer ${JSON.parse(token).token}`
    }
    return req
});

export const getBanner = () => API.get('/p');
export const postUser = (data) => API.post('/signup',data)
export const loginUser = (data) => API.post('/signin',data);
export const addWatch = (data) => API.patch('/pu',data);