//1
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
// 2
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
var userInformation = {
    name: 'hwang',
    age: 24,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('hello');
    }
};
var cutZero = function (text) {
    var result = text.replace(/^0+/, "");
    return result;
};
// cutZero('0103231243');
var removeDash = function (text) {
    var result = text.replace(/-/gi, "");
    return parseFloat(result);
};
var phoneNumberTool = function (number, cutFnc, removeFnc) {
    var result = removeFnc(cutFnc(number));
    console.log(result);
    return result;
};
phoneNumberTool('010-1111-2222', cutZero, removeDash);
// 6
function maxValue() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < params.length; i++) {
        if (params[i] >= result) {
            result = params[i];
        }
    }
    console.log(result);
    return result;
}
maxValue(5, 4, 1, 10, 6, 9);
var userObj = {
    user: 'kim',
    comment: [3, 5, 4],
    admin: false,
};
function outputUserObj(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
outputUserObj(userObj);
// 8
function outputArray(_a) {
    var age = _a[0], favorite = _a[1], married = _a[2];
    console.log(age, favorite, married);
}
outputArray([40, 'wine', false]);
