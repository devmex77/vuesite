import axios from 'axios'

//creando api
const api = axios.create({
    baseURL: '',
    headers: {
        'content-type': 'application/json'
    }
})

export default api