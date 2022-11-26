export {}

// 1

type Bus = {
  color: string,
  model: boolean,
  price: number
}

type TypeChanger<T> = {
  [key in keyof T]: string | number
}

type newBusType = TypeChanger<Bus>

type TypeChangerUpgrade<T, NT> = {
  [key in keyof T]: NT
}

type NewUpgradeBusType = TypeChangerUpgrade<Bus, string>

// 2

type Age<T> = T extends [string, ...any] ? T[0] : unknown;
let userAge1: Age<[string, number]>;
let userAge2: Age<[boolean, number]>;

// 3

type TypeGet<T> = T extends (x: infer R) => any ? R : any;
type a = TypeGet<(x: number) => void>