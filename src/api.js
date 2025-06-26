import axios from 'axios'

//creando api
const api = axios.create({
    baseURL: 'http://localhost:8055', // Cambia si usas otro puerto o dominio
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api