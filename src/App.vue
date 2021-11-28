<template>
  <AppLayout>

    <template v-slot:header>
      <HelloWorld :msg="message" />
    </template>
    <template v-slot:body>
      <img alt="Vue logo" src="./assets/logo.png" />
    

      <Button > Enviar 1 </Button>
      <Button > Enviar 2 </Button>
    </template >

  </AppLayout>





</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import AppLayout from './components/AppLayout.vue'

export default {
  name: 'App',
  data(){
    return {
      message:"Hola Mundo 2"
    }
  },
  components: {
    HelloWorld,
    Button,
    AppLayout
  }
}
</script>
