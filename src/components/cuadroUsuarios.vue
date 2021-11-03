<template>
  <div>
    <div class="prevProd">
      <p class="id">{{id}}</p>
      <img src="@/assets/user.png" alt="" srcset="">
      <h2>{{nombre}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    nombre: String
  }
}
</script>

<style scoped>
  .prevProd{
    width: 300px;
    padding: 10px;
  }
  .prevProd .id{
    border: 3px solid #FF7930;
    border-radius: 14px;
    padding: 4px;
    margin-right: 10px;
    display: inline-block;
  }
  .prevProd img{
    width: 50px;
    border-radius: 5px;
    margin-left: 10px;
    display: inline-block;
  }
  .prevProd h2{
    width: 150px;
    display: inline-block;
  }

</style>
