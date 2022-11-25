//1
function toLengthFnc(data) {
    return data.length;
}
toLengthFnc('100');
toLengthFnc(['kim, park']);
var data = '{"name": "dog", "age": 1}';
function jsonToObj(json) {
    return JSON.parse(json);
}
jsonToObj(data);
//3
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    return Person2;
}());
var hwangPerson = new Person2('hwang');
console.log(hwangPerson.name);
