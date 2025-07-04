import type { App } from 'vue'
import { createPinia } from 'pinia'
export * from './user'

export const initStore = (app: App) => {
    const pinia = createPinia()
    app.use(pinia)
    return pinia
}