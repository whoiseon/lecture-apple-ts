// Type Alias

type Animal = string | number | undefined;
let animals: Animal = 'kim';

type ClientType = {
  name: string,
  age: number
}

let clientSel: ClientType = {
  name: 'kim',
  age: 21
}

// typescript readonly
type GirlfriendType = {
  readonly name: string
}

const girlFriend: GirlfriendType = {
  name: 'rim',
}

// type alias union
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = {
  x: number,
};

type PositionY = {
  y: number,
};

type NewType = PositionX & PositionY

const position: NewType = {
  x: 10,
  y: 20,
}