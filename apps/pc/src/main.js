import './assets/main.css'

import { createApp } from 'vue'
import CustomUi from 'custom-ui';
import 'custom-ui/dist/custom-ui.css';
import 'custom-theme/dist/custom-theme.css';
import VueVirtualScroller from 'vue-virtual-scroller'

import App from './App.vue'
import GlobalComp from './components/global-comp.vue'
import router from './router'
import registerDirectives from './directives'
import { initStore } from '@/stores'

const app = createApp(App);

app.use(CustomUi);

app.config.performance = true;
app.component('GlobalComp', GlobalComp);
registerDirectives(app);
initStore(app)
app.provide('appName', 'walker');
app.use(router).use(VueVirtualScroller).mount('#app');

app.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info)
}
