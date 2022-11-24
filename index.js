var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "\n      <div style=\"\n        position: relative;\n        top: ".concat(a * 400, "px;\n        left: ").concat(a * 400, "px;\n        width: ").concat(this.width, "px;\n        height: ").concat(this.height, "px;\n        background-color: ").concat(this.color, "\n      \">\n      </div>\n    ");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var newSquare = new Square(30, 30, 'red');
newSquare.draw();
newSquare.draw();
newSquare.draw();
newSquare.draw();
newSquare.draw();
