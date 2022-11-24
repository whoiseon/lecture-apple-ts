interface ProductType {
  brand: string,
  serialNumber: number,
  model: string[],
}

const product: ProductType = {
  brand: 'SAMSUNG',
  serialNumber: 1360,
  model: ['TV', 'phone'],
}

interface CartType {
  product: string,
  price: number,
}

interface NoCardType extends CartType {
  card: boolean;
}

const myCart: (CartType | NoCardType)[] = [
  {
    product: '청소기',
    price: 7000,
    card: false,
  },
  {
    product: '삼다수',
    price: 800,
  }
]

interface operateObjType {
  plus: (num1: number, num2: number) => number,
  minus: (num1: number, num2: number) => number,
}

const operateObj: operateObjType = {
  plus(num1, num2) {
    return num1 + num2;
  },
  minus(num1, num2) {
    return num1 - num2;
  }
}