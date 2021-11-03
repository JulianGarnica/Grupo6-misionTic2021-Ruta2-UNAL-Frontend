<template>
  <div class="cartas">
    <div v-for="(item, index) in usuarios" :key="item.pk" class="carta">
      <cuadroUsuarios :id="index+1" :nombre="item.fields.name+' '+item.fields.lastname"></cuadroUsuarios>
      <input type="button" @click="mostrarInformacionAdicional(item)" value="Ver más información">
    </div>
    <ventanaModal v-if="mostrarModal" v-on:cerrarModal="cerrarModal" :datosMostrar="userSelect"></ventanaModal>
  </div>
</template>

<script>
import axios from 'axios'
import cuadroUsuarios from '@/components/cuadroUsuarios.vue'
import ventanaModal from '@/components/ventanaModal.vue'

export default {
  data () {
    return {
      usuarios: null,
      userSelect: null,
      mostrarModal: false
    }
  },
  components: {
    cuadroUsuarios,
    ventanaModal
  },
  methods: {
    consultaUsuarios () {
      axios.get('http://127.0.0.1:8000/customers/',
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(result => {
        this.usuarios = result.data.customers
      }).catch(error => {
        this.$swal({
          icon: 'error',
          title: 'Error al consultar',
          text: 'Error al consultar, vuélvelo a intentar.'
        })
        console.log(error)
      })
    },
    mostrarInformacionAdicional (objeto) {
      this.userSelect = {
        imagen: 'user.png',
        titulo: 'Información del usuario',
        Nombres: [
          {
            Nombre: objeto.fields.name
          }
        ],
        Apellidos: [
          {
            Apellido: objeto.fields.lastname
          }
        ],
        Dirección: [
          {
            address: objeto.fields.address
          }
        ],
        Teléfono: [
          {
            phone: objeto.fields.phone
          }
        ]
      }
      this.mostrarModal = true
    },

    cerrarModal () {
      this.mostrarModal = false
    }
  },
  mounted: function () {
    this.$nextTick(this.consultaUsuarios())
  }
}
</script>

<style scoped>
  .cartas{
    overflow: hidden;
    width: 100%;
  }
  .carta{
    display: inline-block;
    margin: 30px;
    border: 3px solid #FF7930;
    border-radius: 10px;
  }
  .carta input[type="button"]{
    margin: 5px;
    padding: 10px;
    background: #FF7930;
    border: 0px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
  .carta input[type="button"]:hover{
    background: #c05a22;
  }
</style>
