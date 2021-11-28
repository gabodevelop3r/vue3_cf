import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
    toUppercaseLocal(value){
        return value.toUpperCase()
    }
}
app.mount('#app')
