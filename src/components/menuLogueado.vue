<template>
  <div class="navbar">
    <img alt="Tienda logo" class="tienda_logo" src="../assets/logo.png">
    <h2>Tiendita de Doña Inés</h2>
    <div class="opciones">
      <ul>
        <li>Bienvenido {{dataUser.name}}</li>
        <li @click="cerrarSesion()">Cerrar sesión</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataUser: Object
  },
  methods: {
    cerrarSesion () {
      localStorage.removeItem('refresh')
      localStorage.removeItem('access')
      this.$router.go('/')
    }
  }
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
  width: auto;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  margin-right: 10px;
  cursor: pointer;
}

.navbar .opciones ul li:hover{
  background-color: white;
  border-radius: 15px;
  color: black;
}

</style>
