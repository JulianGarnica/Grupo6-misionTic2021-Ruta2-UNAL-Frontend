<template>
  <div class="navbar">
    <img alt="Tienda logo" class="tienda_logo" src="../assets/logo.png">
    <h2>Tiendita de Doña Inés</h2>
    <div class="opciones">
      <ul>
        <router-link to="/login"><li>Iniciar Sesión</li></router-link>
        <router-link to="/register"><li>Registrarse</li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.navbar {
  width: 100%;
  height: 70px;
  background-color: #38B8CF;
  display: flex;
  font-size: 13px;
  position: fixed;
  z-index:900;
}
.navbar .tienda_logo{
  width: 40px;
  margin: 10px;
  border: 7px solid rgba(0, 0, 0, .0);
  display:block;
  left: 0;
}
.navbar h2{
  display: block;
  left:0;
  margin-top: 23px;
  color: white;
}
.navbar .opciones{
  display: block;
  margin-left: auto;
  color: white;
}
.navbar .opciones ul{
  list-style:none;
  display: flex;
  height: auto;
  margin: 5px;
  line-height: 60px;
}
.navbar .opciones ul li{
  width: 150px;
  height: 100%;
  margin: auto;
  margin-right: 10px;
}

.navbar .opciones ul li:hover{
  background-color: white;
  border-radius: 15px;
  color: black;
}

</style>
