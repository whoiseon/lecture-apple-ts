//1

function sayHello(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name}`);
  } else {
    console.log('이름이 없습니다.');
  }
}

sayHello('황인선');

function countLength(text: string | number) {
  if (typeof text === 'string') return text.length;
  return String(text).length;
}

countLength(123);

// 2

function marriagePercent(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += money;

  if (house === true) score += 500;
  if (charm === '상') score += 100;
  if (600 <= score) return '결혼가능';
}

marriagePercent(700, true, '중');
marriagePercent(100, false, '상');

// 3

type UserInfoT = {
  name: string,
  age: number,
  plusOne: (x: number) => number
  changeName: () => void;
}

const userInformation: UserInfoT = {
  name: 'hwang',
  age: 24,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log('hello');
  }
}

// 4
type CutType = (text: string) => string;
type RemoveDashType = (text: string) => number;

const cutZero: CutType = (text) => {
  const result = text.replace(/^0+/, "");

  return result;
}

// cutZero('0103231243');

const removeDash: RemoveDashType = (text) => {
  const result = text.replace(/-/gi, "")

  return parseFloat(result);
}

// removeDash('010-123-123');

// 5
type pnType = (number: number, cutFnc: CutType, removeFnc: RemoveDashType) => number;

const phoneNumberTool = (number, cutFnc, removeFnc) => {
  const result = removeFnc(cutFnc(number))
  console.log(result);

  return result;
}

phoneNumberTool('010-1111-2222', cutZero, removeDash);

// 6

function maxValue(...params) {
  let result = 0;

  for(let i = 0; i < params.length; i++) {
    if (params[i] >= result) {
      result = params[i];
    }
  }

  console.log(result);
  return result;
}

maxValue(5, 4, 1, 10, 6, 9);

// 7

interface userType {
  user: string,
  comment: number[],
  admin: boolean,
}

const userObj: userType = {
  user: 'kim',
  comment: [3, 5, 4],
  admin: false,
}

function outputUserObj({ user, comment, admin }): void {
  console.log(user, comment, admin);
}

outputUserObj(userObj);

// 8

function outputArray([age, favorite, married]: (number | string | boolean)[]) {
  console.log(age, favorite, married);
}

outputArray([40, 'wine', false]);