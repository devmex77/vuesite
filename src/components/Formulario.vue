<script setup>
import { reactive } from 'vue'
import api from '../api'

//creando objeto reactivo asignado a una constante con la funcion reactive, para poder usarlo con un formulario reactivo
const form = reactive({
  nombre: '',
  correo: '',
  edad: '',
  nombre_escuela: ''
})

//creando funcion flecha asincronica asignada a una constante
const handleSubmit = async () => {
  //try&catch--> manejo de errores en llamadas a la api, acceso a archivos, ops con base de datos, etc 
  try {
    await api.post('/items/usuarios', form)
    alert('Formulario enviado con éxito ✅')
    form.nombre = ''
    form.correo = ''
    form.edad = ''
    form.nombre_escuela = ''
  } catch (error) {
    console.error('Error al enviar el formulario:', error.response?.data || error.message)
    alert('❌ Hubo un error al enviar el formulario.')
  }
}
</script>

<template>
<div class="container mt-5 mb-5 text-dark">
    <form @submit.prevent="handleSubmit" class="border p-4 rounded bg-info">
      <h2 class="mb-4">Formulario de Registro</h2>

      <!-- Nombre -->
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          class="form-control"
          v-model="form.nombre"
          required
        />
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="correo" class="form-label">Correo Electrónico</label>
        <input
          type="email"
          id="correo"
          class="form-control"
          v-model="form.correo"
          required
        />
      </div>

      <!-- Edad -->
      <div class="mb-3">
        <label for="edad" class="form-label">Edad</label>
        <input
          type="number"
          id="edad"
          class="form-control"
          v-model="form.edad"
          min="0"
        />
      </div>

      <!-- Escuela -->
      <div class="mb-3">
        <label for="nombre_escuela" class="form-label">Escuela</label>
        <input
          type="text"
          id="nombre_escuela"
          class="form-control"
          v-model="form.nombre_escuela"
          min="0"
        />
      </div>
      
      <!-- Botón -->
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
  <br>
</template>

<style scoped></style>