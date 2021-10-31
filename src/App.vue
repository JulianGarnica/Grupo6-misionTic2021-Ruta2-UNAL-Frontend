<template>
  <Menu v-if="!userData"></Menu>
  <MenuLogueado :dataUser="userData" v-else></MenuLogueado>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="wrapper"  v-if="userData">
    <Menu2></Menu2>
    <div class="mainContent">
      <router-view :dataUser="userData"/>
    </div>
  </div>

  <div class="wrapperNoLog"  v-if="!userData">
    <div class="mainContentNoLog">
      <router-view dataUser=null />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/menu.vue'
import MenuLogueado from '@/components/menuLogueado.vue'
import Menu2 from '@/components/menu2.vue'
import VueJwtDecode from 'vue-jwt-decode'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      userData: null
    }
  },
  components: {
    Menu,
    MenuLogueado,
    Menu2
  },
  methods: {
    getUserLogged () {
      const accessToken = localStorage.access
      const refreshToken = localStorage.refresh
      if (accessToken != null && refreshToken != null) {
        const UserData = VueJwtDecode.decode(accessToken)
        //  const refreshData = VueJwtDecode.decode(refreshToken)
        this.getUserData(UserData.user_id, accessToken, refreshToken)
      }
    },
    getUserData (idUser, token, refreshToken) {
      const authBearer = 'Bearer ' + token
      axios.get('https://apptienditabackend.herokuapp.com/user/' + idUser,
        {
          headers: {
            Authorization: authBearer,
            'Content-Type': 'application/json'
          }
        }).then(result => {
        this.userData = result.data
        console.log(this.userData)
        axios.post('https://apptienditabackend.herokuapp.com/refresh/', { refresh: refreshToken },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(result => {
          localStorage.access = result.data.access
        }).catch(error => {
          this.$swal({
            icon: 'error',
            title: 'Error',
            text: 'Sesión cerrada por tiempo de inactividad, vuelve a iniciar sesión.'
          })
          localStorage.removeItem('refresh')
          localStorage.removeItem('access')
          console.log(error)
        })
      }).catch(error => {
        this.$swal({
          icon: 'error',
          title: 'Error',
          text: 'Sesión cerrada por tiempo de inactividad, vuelve a iniciar sesión.'
        })
        localStorage.removeItem('refresh')
        localStorage.removeItem('access')
        console.log(error)
      })
    }
  },
  mounted: function () {
    this.$nextTick(this.getUserLogged())
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

.wrapperNoLog{
  display: flex;
  position: relative;
}

.mainContentNoLog{
  width: 100%;
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
