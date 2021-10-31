<template>
  <div>
    <registerForm id='registerForm'></registerForm>
  </div>
</template>

<script>
import registerForm from '@/components/registerForm.vue'

export default {
  name: 'Register',
  components: {
    registerForm
  }
}
</script>

<style scoped>
div {
  display: flex;
}
#registerForm {
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
