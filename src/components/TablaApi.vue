<script setup>
import api from '../api.js'
import { ref, onMounted} from 'vue'

//variable reactiva que contiene un arreglo vacio, es decir que detectara cualquier cambio en la variable 
// y actualizara cada vez que cambie
const registros = ref([])

// Función para obtener registros desde Directus
const obtenerRegistros = async () => {
  try {
    const response = await api.get('/items/personas') // la direccion siempre es"/items/nombre_coleccion
    registros.value = response.data.data
  } catch (error) {
    console.error('Error al obtener registros:', error.response?.data || error.message)
  }
}

//se usa para ejecutar codigo despues de montar el compoenente en el dom, 
onMounted(() => {
  //Invocando a la funcion
  obtenerRegistros()
})

</script>

<template>
    <div class="wrapper mb-5">
        <table border="2" class="container text-center tabla-con-bordes">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Edad</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="registro in registros" :key="registro.id">
        <td>{{ registro.nombre }}</td>
        <td>{{ registro.correo }}</td>
        <td>{{ registro.edad }}</td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
</table>

    </div>
</template>

<style scoped>
.tabla-con-bordes {
    border-collapse: collapse; /* Une los bordes de las celdas */
    width: 100%;
  }

  .tabla-con-bordes th,
  .tabla-con-bordes td {
    border: 3px solid #5aacef; /* Borde individual para cada celda */
    padding: 8px;
  }

  .tabla-con-bordes thead {
    background-color: #2052de;
  }
</style>