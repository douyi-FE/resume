import { defaultTheme } from './default'

export function applyTheme() {
    const root = document.documentElement;
    Object.entries(defaultTheme).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    })
}