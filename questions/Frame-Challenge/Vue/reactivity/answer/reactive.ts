export default function reactive<T>(target: any): Record<string, T> {
  return new Proxy(target, {
    get(target, key): T {
      return Reflect.get(target, key)
    },
    set(target, key, value) {
      return Reflect.set(target, key, value)
    }
  })
};