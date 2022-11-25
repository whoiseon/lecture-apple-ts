// 1
const lastFood: [string, number, boolean] = [
  'Hamburger',
  5400,
  true
];

// 2
const exampleArr: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

// 3
function exampleFnc(...params: [string, boolean, ...(number | string)[]]) {
  return params;
}

exampleFnc('string', true, 1, 3, 5, '21');

function exampleFnc2(...params: (number | string)[]): [string[], number[]] {
  const result: [string[], number[]] = [[], []];

  params.forEach((item) => {
    if (typeof item === 'string') {
      result[0].push(item);
    } else {
      result[1].push(item);
    }
  })

  return result;
}

exampleFnc2('1', 2, '3', '4', 5, 6);