<template>
  <div>
    <form class="formLogin" @submit.prevent="login()">
      <h1>Iniciar sesión</h1>
      <input type="text" placeholder="Nombre de usuario" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Entrar">
      <br><br>
      ¿Aún no te haz registrado?
      <br>
      <router-link to="/register">Regístrate ahora</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login () {
      axios.post('https://apptienditabackend.herokuapp.com/login/',
        {
          username: this.username,
          password: this.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(result => {
        localStorage.access = result.data.access
        localStorage.refresh = result.data.refresh
        window.location.href = ('/')
      }).catch(error => {
        this.$swal({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: 'Usuario o contraseña incorrecto.'
        })
        console.log(error)
      })
    }
  }
}

</script>

<style scoped>
  a{
    color: #FF7930;
  }

  .formLogin{
    width: auto;
    max-width: 400px;
    padding: 30px;
  }
  input{
    height: 40px;
    width: 90%;
    margin-top:30px;
    padding: 10px;
    font-size: 15px;
    border: 1px solid gray;
    border-radius: 10px;
  }
  input[type=submit]{
    background-color: #FF7930;
    border: 0;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  input[type=submit]:hover{
    background-color: #c05a22;
  }
</style>
