import './assets/main.css'

import { createApp } from 'vue'
import VueVirtualScroller from 'vue-virtual-scroller'

import App from './App.vue'
import GlobalComp from './components/global-comp.vue'
import router from './router'
import registerDirectives from './directives'

const app = createApp(App);

app.config.performance = true;
app.component('GlobalComp', GlobalComp);
registerDirectives(app);
app.provide('appName', 'walker');
app.use(router).use(VueVirtualScroller).mount('#app');

app.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info)
}
