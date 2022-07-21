export default function count(arr: number[], num: number) {
  // write your code here
  111
  return arr.reduce((prev, cur) => cur === num ? prev + cur : prev)
};
