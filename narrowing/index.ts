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

// narrowing tip

type Fish = { swim: string }
type Bird = { fly: string }

function animalFnc(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim = 'true';
  }
}

type CarType = {
  wheel: '4개',
  color: string,
}

type BikeType = {
  wheel: '2개',
  color: string,
}

function carOrBike(x: CarType | BikeType) {
  if (x.wheel === '2개') {
    console.log('Bike');
  } else {
    console.log('Car');
  }
}