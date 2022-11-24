function myFnc(int: number): number {
  return int * 2;
}

myFnc(4);

// void = return 값이 없을 때;

function myFncVoid(int: number): void {
  const number = int + 1;
}

// parameter 가 있을 수도 없을 수도 있을 때
// int? :number === int: number | undefined

function myFncNarrow(int: number): void {
  const number = int + 3;
}

myFncNarrow(3);

type FT = (a: string) => number;

const fncType: FT = (a) => {
  return 1
}

// Object function

type OF = {
  name: string,
  plusOne: (a: number) => number
}

const objFnc: OF = {
  name: 'kim',
  plusOne: (a) => {
    return a + 1
  }
}

objFnc.plusOne(1);

// high order function

function firstFnc(a) {
  a();
}

function secondFnc() {

}

firstFnc(secondFnc);

// rest parameter

function restFnc(...params: string[]) {
  console.log(params);
}

restFnc('1', '2', '3');

const arr = ['hello', 100];
const [hello, number] = arr;

interface objDataType {
  student: boolean,
  age2: number,
}


const objData: objDataType = {
  student: true,
  age2: 20,
}

function objFncDes({ student, age2 }: objDataType) {
  console.log(student, age2);
}

objFncDes(objData);