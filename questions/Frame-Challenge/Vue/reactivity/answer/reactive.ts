export default function reactive<T extends Record<string, T>>(target: any): any {
  return new Proxy(target, {
    get(target, key): Pick<typeof target, typeof key> {
      return Reflect.get(target, key)
    },
    set(target, key, value) {
      return Reflect.set(target, key, value)
    }
  })
};

// const obj = {
//   a: 1,
//   b: 2
// }
// type b = getKey<typeof obj>
// const a = reactive({ b: 1 })

// const c = reactive({ a: 1 })