import { reactive } from './reactive';

type SetHandler = (prop: string, value: any) => void;
const proxyObj = function(obj: any, setHandler?: SetHandler) {
    const handler = {
        get(target: any, prop: string) {
            return target[prop];
        },
        set(target: any, prop: string, value: any) {
            setHandler && setHandler(prop, value);
            target[prop] = value;
            return true;
        }
    }
    return new Proxy(obj, handler);
}

const defineObject = function(obj: any, key: string, setHandler?: SetHandler) {
    let value = '张三';
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(val: any) {
            value = val;
            setHandler && setHandler(key, value);
            return true;
        }
    })
}

export { proxyObj, defineObject, reactive };