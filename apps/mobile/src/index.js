import AppComponent from './App.vue'

export function install(app) {
  app.component('Mobile', AppComponent)
}

export default {
  install
}