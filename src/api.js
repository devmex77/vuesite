import axios from 'axios'

//creando objeto api 
const api = axios.create({
    baseURL: 'https://mycms-hbj3.onrender.com', // Cambia si usas otro puerto o dominio
    headers: {
        'Content-Type': 'application/json'
    }
})

//exportando el objeto api
export default api