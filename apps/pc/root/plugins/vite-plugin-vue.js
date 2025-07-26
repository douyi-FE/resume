export default function vitePluginVue() {
  return {
    name: 'vite-plugin-vue',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        return code
      }
    },
    resolveId(id) {
      if (id.endsWith('.vue')) {
        return id
      }
    },
  }
}