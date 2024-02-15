function alsoAdd(n1: number, n2: number): number {
  return n1 + n2;
}

function alsoPrintResult(num: number) {
  console.log("Result:" + num);
}

console.log(alsoPrintResult(alsoAdd(5, 17)));

let combineValues: (a: number, b: number) => number;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 30, (result) => {
  console.log(result);
});
