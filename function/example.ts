function sayHello(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name}`);
  } else {
    console.log('이름이 없습니다.');
  }
}

sayHello('황인선');

function countLength(text: string | number) {
  if (typeof text === 'string') return text.length;
  return String(text).length;
}

countLength(123);

function marriagePercent(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += money;

  if (house === true) score += 500;
  if (charm === '상') score += 100;
  if (600 <= score) return '결혼가능';
}

marriagePercent(700, true, '중');
marriagePercent(100, false, '상');