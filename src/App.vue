<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="message" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      message:"Hola Mundo 2"
    }
  },
  components: {
    HelloWorld
  }
}
</script>
