import Util from "./util";

type Func = (...args: any[]) => void

const demoFunction = (a: Func, b: Func) => {
  const utrl = new Util()
  utrl.a()
  utrl.b()
}


export default demoFunction;
