<template>
  <div class="cartas">
    <div v-for="(item, index) in productos" :key="item.pk" class="carta">
      <cuadroProducto :id="index+1" :nombreProducto="item.fields.productname" :unitprice="item.fields.unitprice" :category="item.fields.categoryid" :supplier="item.fields.supplierid" :quantity="item.fields.quantity"></cuadroProducto>
      <input type="button" @click="mostrarInformacionAdicional(item)" value="Ver más información">
    </div>
    <ventanaModal v-if="mostrarModal" v-on:cerrarModal="cerrarModal" :datosMostrar="prodSelect"></ventanaModal>
  </div>
</template>

<script>
import axios from 'axios'
import cuadroProducto from '@/components/cuadroProducto.vue'
import ventanaModal from '@/components/ventanaModal.vue'

export default {
  data () {
    return {
      productos: null,
      prodSelect: null,
      mostrarModal: false
    }
  },
  components: {
    cuadroProducto,
    ventanaModal
  },
  methods: {
    consultaProductos () {
      axios.get('http://127.0.0.1:8000/allproducts/',
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(result => {
        this.productos = result.data.products
        console.log(result.data.products)
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
      this.prodSelect = {
        imagen: 'producto.png',
        titulo: objeto.fields.productname,
        categoria: [
          {
            name: objeto.fields.categoryid.name
          }
        ],
        Proveedor: [
          {
            nombre: objeto.fields.supplierid.name,
            numCel: objeto.fields.supplierid.phone
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
    this.$nextTick(this.consultaProductos())
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
