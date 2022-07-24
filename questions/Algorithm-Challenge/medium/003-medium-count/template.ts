export default function count(arr: number[], num: number) {
  // write your code here
  return arr.reduce((prev, cur) => cur === num ? prev + cur : prev)
};
