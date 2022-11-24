// narrowing
function myFnc2(x) {
    if (typeof x === 'string') {
        return Number(x) + 1;
    }
    return x + 1;
}
myFnc2(2);
function myFnc3(x) {
    var arr = [];
    if (typeof x === 'number') {
        arr[0] = x;
    }
}
myFnc3(123);
// Assertion
function myFnc4(x) {
    var arr2 = [];
    arr2[0] = x;
}
myFnc4(123);
function animalFnc(animal) {
    if ('swim' in animal) {
        animal.swim = 'true';
    }
}
function carOrBike(x) {
    if (x.wheel === '2개') {
        console.log('Bike');
    }
    else {
        console.log('Car');
    }
}
