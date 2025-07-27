export default {
  mounted(el, binding) {
    const { value: { tagetId, imgSrc } } = binding;
    const target: HTMLImageElement = document.getElementById(tagetId) as HTMLImageElement;
    if (target) {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('v-lazy mounted', imgSrc);
            el.src = imgSrc;
            observer.unobserve(el);
          }
        });
      };
      const observer = new IntersectionObserver(callback, {
        root: target,
        rootMargin: '10px',
        threshold: 0.3,
      });
      observer.observe(el);
    }
  }
};