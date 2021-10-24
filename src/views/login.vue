<template>
  <div>
    <loginForm id='loginForm'></loginForm>
  </div>
</template>

<script>
import loginForm from '@/components/loginForm.vue'

export default {
  name: 'Login',
  components: {
    loginForm
  }
}
</script>

<style scoped>
div {
  display: flex;
}
#loginForm {
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  margin: auto;
  margin-top: 50px;
}
</style>
