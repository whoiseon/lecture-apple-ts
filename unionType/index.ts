// Union type
  // 연산 불가능

let client: number | string = 123;
let clients: (number | string)[] = [1, '2', 3];
let myObject: { a: string | number } = {
  a: '123',
}

let clientAge: string | number;

// any 사용을 지양한다

let clientName: any;
clientName = 123;
clientName = [];

// unknown

let newClientName: unknown;
newClientName = 'hwang';
newClientName = 123;
