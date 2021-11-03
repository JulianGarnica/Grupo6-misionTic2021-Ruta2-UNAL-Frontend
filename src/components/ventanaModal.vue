<template>
  <div class="ventanaInfoAdicional">
    <input type="button" value="X" @click="$emit('cerrarModal')">
    <div class="contenido">
      <div v-for="(item, key, index) in datosMostrar"  :key="index" >
        <span  v-if="key == 'imagen'" ><img :src="getImgUrl(item)" alt="" srcset=""></span>
        <h1 v-else-if="key == 'titulo'" class="nomProd">{{item}}</h1>
        <div v-else>
          <p><b>{{key}}</b></p>
          <div v-for="(value, key, index) in item" :key="index">
            <p v-for="(value2, key, index) in value" :key="index">
              {{value2}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datosMostrar: Object
  },
  methods: {
    getImgUrl (pet) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + pet)
    }
  }
}
</script>

<style>
  .ventanaInfoAdicional{
    width:300px;
    height: auto;
    max-height: 70vh;
    overflow-x: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: #F3FAFF;
    border: 3px solid #FF7930;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
  }

  .ventanaInfoAdicional input[type='button']{
    border-radius: 50%;
    border: 0;
    display: flex;
    position: absolute;
    color:white;
    background:  #FF7930;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
  }

  .ventanaInfoAdicional .contenido{
    margin: 30px;
    display: block;
  }

  .ventanaInfoAdicional .contenido img{
    width: 200px;
    border: 2px solid gray;
    border-radius: 5px;
  }

  .ventanaInfoAdicional .contenido .nomProd{
    margin: 10px;
  }
</style>
