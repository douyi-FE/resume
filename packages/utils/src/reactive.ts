const reactiveMap = new WeakMap<object, any>();

const reactive = <T extends object>(target: T) => {
  if (reactiveMap.has(target)) {
    return reactiveMap.get(target);
  }

  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      if (typeof res === 'object' && res !== null) {
        return reactive(res);
      }
      return res;
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      return res;
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key);
      return res;
    }
  });

  reactiveMap.set(target, proxy);
  return proxy;
};

export { reactive };