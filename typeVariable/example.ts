// 1

type ClientSizeX = {
  x: number,
  y: number,
};

type ClientSizeY = {
  x: number,
  y: number,
};

// type NewType = ClientSizeX & ClientSizeY;
// error

// 2

type BoxTypes = {
  color?: string,
  size: number,
  readonly position: number[];
}

const testBox: BoxTypes = {
  size: 123,
  position: [12, 34],
}

// 3
type ClientInfoTypes = {
  name: string,
  phone: number,
  email: string,
}

type MinorCheckTypes = {
  minor: boolean
}

type InfoTypes = ClientInfoTypes & MinorCheckTypes

const clientInfo: InfoTypes = {
  name: 'kim',
  phone: 123,
  email: 'abc@naver.com',
  minor: false,
}