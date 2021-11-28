<template>
  <AppLayout>

    <template v-slot:header>
        <HelloWorld :msg="'Hola emit'" @eventos="handleEventos"/>
    </template>
    <template v-slot:body>
        <img alt="Vue logo" src="./assets/logo.png" />
        <Button > Enviar 1 </Button>
        <Button > Enviar 2 </Button>
    </template >

  </AppLayout>



  <keep-alive >
      <Fade >

        <component :is="currentComponent"></component>
      </Fade>

  </keep-alive>
  <button @click="currentComponent = 'home'">Home</button>
  <button @click="currentComponent = 'about'">About</button>

  <h1>{{ $filters.toUppercaseLocal("gabriel") }}</h1>



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import AppLayout from './components/AppLayout.vue'

import Home from './components/Home.vue'
import About from './components/About.vue'

import Fade from './transitions/Fade.vue'

export default {
  name: 'App',
  data(){
    return {
      message:"Hola Mundo 2",
      currentComponent:"About"
    }
  },
  components: {
    HelloWorld,
    Button,
    AppLayout,
    Home,
    About,
    Fade
  },
  methods:{
    handleEventos(value){
        console.log('handle : ',value);
    }
  }
}
</script>


