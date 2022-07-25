function isObject(target: Record<string, any>): boolean {
  return target !== null && (typeof target === 'object' || typeof target === 'function')
}


export {
  isObject
}