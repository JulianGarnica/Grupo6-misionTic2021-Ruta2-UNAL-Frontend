<template>
  <div class="sideBar">
    <h2>sideBar</h2>
    <ul>
      <a href=""><li><font-awesome-icon icon="box" /> Productos</li></a>
      <a href=""><li><font-awesome-icon icon="user-tag" /> Clientes</li></a>
      <a href=""><li><font-awesome-icon icon="piggy-bank" /> Ventas</li></a>
      <a href=""><li><font-awesome-icon icon="users" /> Usuarios</li></a>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sideBar{
  position: fixed;
  width: 200px;
  height: 100%;
  background-color:#277F8F;
  padding: 30px 0;
}
.sideBar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}
.sideBar ul li{
  padding: 15px;
  width: 70%;
  color: white;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(225,225,225,0.05);
}
.sideBar ul li a{
  color: white;
  display: block;
  text-decoration: none;
}
.sideBar ul li:hover{
  background: white;
  color: black;
}
</style>
