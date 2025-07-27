class EventEmitter {
  private events: Map<string, Function[]> = new Map();
  constructor() {
    this.events = new Map();
  }

  on(eventName: string, callback: Function) {
    if (this.events.get(eventName)) {
      this.events.get(eventName)?.push(callback);
    } else {
      this.events.set(eventName, [callback]);
    }
  }

  emit(eventName: string, ...args: any[]) {
    if (this.events.get(eventName)) {
      this.events.get(eventName)?.forEach(callback => callback(...args));
    }
    else {
      throw new Error(`Event ${eventName} not found`);
    }
  }

  off(eventName: string, callback: Function) {
    if (this.events.get(eventName)) {
      this.events.set(eventName, this.events.get(eventName)?.filter(cb => cb !== callback) ?? []);
    }
    else {
      throw new Error(`Event ${eventName} not found`);
    }
  }

  once(eventName: string, callback: Function) {
    const fn = (...args: any[]) => {
      this.off(eventName, fn);
      callback(...args);
    };
    this.on(eventName, fn);
  }
}

export default EventEmitter;