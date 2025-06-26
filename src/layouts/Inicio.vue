<script setup>
import Carrusel from '../components/Carrusel.vue'
import Card1 from '../components/Card1.vue'
import Card2 from '../components/Card2.vue'
</script>

<template>
    <div class="fondo text-center w-100">
        
        <div class="container text-center w-100">
            <h1> Este sitio ha sido hecho con 
            <a href="https://vuejs.org/" target="_blank">
            <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a> y con 🫶</h1>
        </div>
    </div>
    <div class="container m-5">
            <h2>Este es un sitio de pruebas y demostraciones de codigo, disponible para el publico en general
                lo que aqui encontraras son funcionalidades, componentes y elementos de codigo con fines
                experimentales
            </h2>
        </div>
    <div class="card-group row row-cols-1 row-cols-md-3 g-4 ms-5">
        
    </div>
    <Carrusel></Carrusel>
</template>

<style scoped>
.fondo {
    background-color: rgb(248, 247, 247);
}
</style>