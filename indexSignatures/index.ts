export {}

// index signatures,

interface StringOnly {
  [key: number]: string | number,
}

const userInfo: StringOnly = {
  0: 'kim',
  1: 20,
  2: 'seoul',
}

// recursive

interface MyType {
  fontSize: MyType | number
}

const css: MyType = {
  fontSize: {
    fontSize: {
      fontSize: 14,
    }
  }
}