export default {
    mounted(el, binding) {
        const { color, bg } = binding.value;
        el.style.color = color;
        el.style.backgroundColor = bg;
    }
}