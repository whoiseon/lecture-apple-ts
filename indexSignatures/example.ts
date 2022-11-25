export {};

interface CarModelType {
  [key: string]: number | string;
}

const obj: CarModelType = {
  model: 'k5',
  brand: 'kia',
  price: 6000,
  year: 2030,
  date: '6월',
  percent: '5%',
  dealer: '김차장',
}

interface CssType {
  fontSize: number,
  [key: string]: number | CssType,
}

const obj2: CssType = {
  fontSize: 10,
  secondary: {
    fontSize: 12,
    third: {
      fontSize: 14,
    }
  }
}