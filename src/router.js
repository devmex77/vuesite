import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './layouts/Inicio.vue'
import TablaApi from './components/TablaApi.vue'
import Registrarse from './layouts/Registrarse.vue'
import Productos from './layouts/Productos.vue'

// rutas del sitio
const routes = [
    { path: '/', component: Inicio },
    { path: '/registrarse', component: Registrarse },
    { path: '/tabla', component: TablaApi },
    { path: '/productos', component: Productos },
]

// creando router
const router =  createRouter ({
    history: createWebHistory(),
    routes,
})

export default router