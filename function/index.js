function myFnc(int) {
    return int * 2;
}
myFnc(4);
// void = return 값이 없을 때;
function myFncVoid(int) {
    var number = int + 1;
}
// parameter 가 있을 수도 없을 수도 있을 때
// int? :number === int: number | undefined
function myFncNarrow(int) {
    var number = int + 3;
}
myFncNarrow(3);
var fncType = function (a) {
    return 1;
};
var objFnc = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    }
};
objFnc.plusOne(1);
// high order function
function firstFnc(a) {
    a();
}
function secondFnc() {
}
firstFnc(secondFnc);
// rest parameter
function restFnc() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(params);
}
restFnc('1', '2', '3');
var arr = ['hello', 100];
var hello = arr[0], number = arr[1];
var objData = {
    student: true,
    age2: 20,
};
function objFncDes(_a) {
    var student = _a.student, age2 = _a.age2;
    console.log(student, age2);
}
objFncDes(objData);
