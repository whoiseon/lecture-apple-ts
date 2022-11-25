export {};

type Car = {
  color: boolean,
  model: boolean,
  price: boolean | number,
}

type TypeChanger<T> = {
  [key in keyof T]: string
}

type Age<T> = T extends string ? T : unknown;

const a: Age<number> = 'hi';

type FirstItem<T> = T extends any[] ? T[0] : any;

const arr: FirstItem<string[]> = '123';
const arr1: FirstItem<number> = 2;

type Person<T> = T extends (infer R)[] ? R: unknown