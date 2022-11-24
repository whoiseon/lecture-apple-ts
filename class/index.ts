class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello = () => {
    console.log('Hello', this.name);
  }
}

const newPerson1 = new Person('hwang');
const newPerson2 = new Person('moon');

newPerson1.sayHello();

class User123 {
  static skill = 'js';
  intro = `${User123.skill} 전문가입니다.`;
}

const chulsoo = new User123();
console.log(chulsoo);

User123.skill = 'ts'

const chulsoo2 = new User123();
console.log(chulsoo2);