// interface는 중복 선언 허용

interface SquareType {
  color: string,
  width: number,
}

const square: SquareType = {
  color: 'red',
  width: 100
}

interface Student {
  name: string,
}

interface Teacher extends Student{
  age: number
}

const students: Student = {
  name: 'hwang'
}

const teachers: Teacher = {
  name: 'hwang',
  age: 20
}

type AnimalType = {
  name: string,
}

type Cat = {
  age: number,
} & AnimalType