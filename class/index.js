var Person = /** @class */ (function () {
    function Person(name) {
        var _this = this;
        this.sayHello = function () {
            console.log('Hello', _this.name);
        };
        this.name = name;
    }
    return Person;
}());
var newPerson1 = new Person('hwang');
var newPerson2 = new Person('moon');
newPerson1.sayHello();
var User123 = /** @class */ (function () {
    function User123() {
        this.intro = "".concat(User123.skill, " \uC804\uBB38\uAC00\uC785\uB2C8\uB2E4.");
    }
    User123.skill = 'js';
    return User123;
}());
var chulsoo = new User123();
console.log(chulsoo);
User123.skill = 'ts';
var chulsoo2 = new User123();
console.log(chulsoo2);
