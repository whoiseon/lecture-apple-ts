// 1
var lastFood = [
    'Hamburger',
    5400,
    true
];
// 2
var exampleArr = ['동서녹차', 4000, true, false, true, true, false, true];
// 3
function exampleFnc() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return params;
}
exampleFnc('string', true, 1, 3, 5, '21');
function exampleFnc2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var result = [[], []];
    params.forEach(function (item) {
        if (typeof item === 'string') {
            result[0].push(item);
        }
        else {
            result[1].push(item);
        }
    });
    return result;
}
exampleFnc2('1', 2, '3', '4', 5, 6);
