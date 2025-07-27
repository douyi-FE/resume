export default {
  mounted(el, binding) {
    el.__vueClickOutHandler__ = (e: MouseEvent) => {
      if (el !== e.target && !el.contains(e.target)) {
        binding.value();
      }
    };
    document.addEventListener('click', el.__vueClickOutHandler__);
  },
  unmounted(el) {
    document.removeEventListener('click', el.__vueClickOutHandler__);
  }
};