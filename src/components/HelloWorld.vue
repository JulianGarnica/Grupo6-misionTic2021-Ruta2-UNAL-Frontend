<template>
  <div class="hello">
    <img src="../assets/tienditaimg.jpg" class="imagenDonaInes" alt="" srcset="">
    <!-- <p class="carritoInicio"><font-awesome-icon icon="shopping-cart" /></p> -->
    <h1>{{ msg }}</h1>
    <p>
      Aquí vendemos todo lo que sumercé quiera. <br>
      Hoy no fio, mañana sí.
      </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.imagenDonaInes{
  width: 500px;
  border-radius: 30px;
}

.carritoInicio{
  font-size: 180px;
}

.hello{
  margin-top:70px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
