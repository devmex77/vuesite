<script setup></script>

<template>
    <nav class="navbar navbar-expand-lg" data-bs-theme="light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">🌐 VueDemo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/registrarse">Registrarse
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tabla">Tabla</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/productos">Productos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Más</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Documentos</a>
            <a class="dropdown-item" href="#">Imagenes</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Luchosite</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Buscar">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
.navbar {
    background-color: aqua;
}
</style>