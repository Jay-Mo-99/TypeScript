//Bring the container elements
var container = document.getElementById("container");
var Square = /** @class */ (function () {
    function Square(row, col, bgColor) {
        this.row = row;
        this.col = col;
        this.bgColor = bgColor;
    }
    Square.prototype.draw = function () {
        //Create the square instance based on the parameters (row, col, bgColor)
        var squareDiv = document.createElement("div");
        squareDiv.style.width = "".concat(this.row, "px");
        squareDiv.style.height = "".concat(this.col, "px");
        squareDiv.style.backgroundColor = this.bgColor;
        squareDiv.style.position = "absolute";
        //Create the random (x,y) inside of the container element(400x400)
        var randomX = Math.random() * (400 - this.row);
        var randomY = Math.random() * (400 - this.col);
        squareDiv.style.left = "".concat(randomX, "px");
        squareDiv.style.top = "".concat(randomY, "px");
        //Draw that square element appends the container element following the random (x,y) position
        container === null || container === void 0 ? void 0 : container.appendChild(squareDiv);
    };
    return Square;
}());
var square = new Square(30, 30, "red");
square.draw();
square.draw();
square.draw();
square.draw();
var square2 = new Square(30, 30, "blue");
square2.draw();
