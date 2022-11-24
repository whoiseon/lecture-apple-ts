// 1
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        console.log(this.price * 0.1);
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1.tax());
// 2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        param.forEach(function (item) {
            if (typeof item === 'string') {
                _this.str.push(item);
            }
            else {
                _this.num.push(item);
            }
        });
    }
    return Word;
}());
var newWordObj = new Word('kim', 3, 5, 'park');
console.log(newWordObj.str);
// 3
var User = /** @class */ (function () {
    function User() {
    }
    User.addOne = function (num) {
        User.x += num;
    };
    User.printX = function () {
        console.log(User.x);
    };
    User.x = 10;
    User.y = 20;
    return User;
}());
User.addOne(3);
User.addOne(10);
User.printX();
