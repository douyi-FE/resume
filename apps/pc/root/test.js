import './test.css'
import { createApp } from 'vue'
import App from './src/app.vue'

const app = createApp(App)
app.mount('#app')

console.log('test', import.meta.env.VITE_BASE_URL, import.meta.env.VITE_SERVER_TOKEN);
console.log('__APP_VERSION__', __APP_VERSION__);

fetch('/pc/data.json').then(res => res.json()).then(data => {
    console.log('data', data);
})