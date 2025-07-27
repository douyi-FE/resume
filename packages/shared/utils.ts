// 防抖
export const debounce = (fn: Function, delay: number) => {
  let timer: any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};

// 节流
export const throttle = (fn: Function, delay: number) => {
  let timer: any;
  return function (...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
};