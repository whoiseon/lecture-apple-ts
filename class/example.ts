// 1

class Car {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): void {
    console.log(this.price * 0.1);
  }
}

const car1 = new Car('소나타', 3000);

console.log(car1.tax());

// 2

class Word {
  num: number[] = [];
  str: string[] = [];

  constructor(...param: (number | string)[]) {
    param.forEach((item) => {
      if (typeof item === 'string') {
        this.str.push(item);
      } else {
        this.num.push(item);
      }
    });
  }
}

const newWordObj = new Word('kim', 3, 5, 'park');
console.log(newWordObj.str);

// 3

class User {
  private static x = 10;
  public static y = 20;

  static addOne(num: number) {
    User.x += num;
  }

  static printX() {
    console.log(User.x);
  }
}

User.addOne(3);
User.addOne(10);
User.printX();
