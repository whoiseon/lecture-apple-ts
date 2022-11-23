function sayHello(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log('이름이 없습니다.');
    }
}
sayHello('황인선');
function countLength(text) {
    if (typeof text === 'string')
        return text.length;
    return String(text).length;
}
countLength(123);
function marriagePercent(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true)
        score += 500;
    if (charm === '상')
        score += 100;
    if (600 <= score)
        return '결혼가능';
}
marriagePercent(700, true, '중');
marriagePercent(100, false, '상');
