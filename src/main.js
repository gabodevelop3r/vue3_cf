import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)


// propiedades globales
app.config.globalProperties.$filters = {
    toUppercaseLocal(value){
        return value.toUpperCase()
    }
}


// directivas
app.directive('background',{
    beforeMount(el, binding, vnode, prevVnode){

        console.log(binding);
        el.style.background = binding.value
    }
})
app.mount('#app')
