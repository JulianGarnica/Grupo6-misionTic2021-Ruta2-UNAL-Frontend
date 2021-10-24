<template>
  <Menu></Menu>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="wrapper">
    <Menu2></Menu2>
    <div class="mainContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/menu.vue'
import Menu2 from '@/components/menu2.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Menu2
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}

body{
  background-color: #F3FAFF;
}

.wrapper{
  display: flex;
  position: relative;
}

.mainContent{
  width: 100%;
  margin-left: 200px;
  margin-top:80px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a{
  color: white;
  text-decoration: none;
}
</style>
