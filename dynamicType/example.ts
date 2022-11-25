export {}

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