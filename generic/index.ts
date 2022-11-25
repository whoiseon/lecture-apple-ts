function genericFnc<MyType>(x: MyType[]): MyType {
  return x[0];
}

const a = genericFnc<number>([4, 2]);
const b = genericFnc<string>(['4', '2']);

function minusFnc<MT extends number>(x: MT) {
  return x - 1
}

const c = minusFnc<number>(100)

interface LengthCheck {
  length: number
}

function textLength<MT extends LengthCheck>(x: MT) {
  return x.length;
}

const d = textLength<string[]>(['100']);