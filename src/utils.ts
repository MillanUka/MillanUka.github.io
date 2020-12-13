export function splitArray(originalArr: any[], size: number) {
  var arr: any[] = [];
  for (var i:number = 0; i < originalArr.length; i += size) {
    arr.push(originalArr.slice(i, i + size));
  }
  return arr;
}
