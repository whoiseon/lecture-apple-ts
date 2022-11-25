const dogDog: [string, boolean] = ['dog', true];

function tupleFnc(...arr: [number, string]) {

}

tupleFnc(1, '2');

const numArray = [1, 2, 3];
const numArray2: [number, ...number[]] = [4, ...numArray];