//1

interface StringLength {
  length: number,
}

function toLengthFnc<MT extends StringLength>(data: MT): number {
  return data.length;
}

toLengthFnc<string>('100');
toLengthFnc<string[]>(['kim, park']);

//2

interface AnimalTypes {
  name: string;
  age: number
}

const data = '{"name": "dog", "age": 1}'

function jsonToObj<MT>(json: string): MT {
  return JSON.parse(json);
}

jsonToObj<AnimalTypes>(data);

//3

class Person2<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}

const hwangPerson = new Person2<string>('hwang');
console.log(hwangPerson.name);