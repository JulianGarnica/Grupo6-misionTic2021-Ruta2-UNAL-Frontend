<template>
  <div>
    <form class="formLogin" @submit.prevent="login()">
      <h1>Registrarse</h1>
      <input type="text" placeholder="Nombre de usuario" v-model="username">
      <input type="text" placeholder="Nombre completo" v-model="name">
      <input type="email" placeholder="Correo" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Entrar">
      <br><br>
      ¿Ya estás registrado?
      <br>
      <router-link to="/login">Inicia sesión</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      name: '',
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      axios.post('https://apptienditabackend.herokuapp.com/user/',
        {
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(result => {
        console.log(result.data)
        localStorage.access = result.data.access
        localStorage.refresh = result.data.refresh
      }).catch(error => {
        this.$swal({
          icon: 'error',
          title: 'Error al registarte',
          text: error
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
