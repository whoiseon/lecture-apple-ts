// narrowing
function myFnc2(x: number | string): number {
  if (typeof x === 'string') {
    return Number(x) + 1;
  }

  return x + 1;
}

myFnc2(2);

function myFnc3(x: number | string) {
  let arr: number[] = [];

  if(typeof x === 'number') {
    arr[0] = x;
  }
}

myFnc3(123);

// Assertion

function myFnc4(x: number | string) {
  let arr2: number[] = [];
  arr2[0] = x as number;
}

myFnc4(123);