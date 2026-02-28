var bgHTML = document.getElementById("bg");
var Square = /** @class */ (function () {
    function Square(row, col, color) {
        this.row = row;
        this.col = col;
        this.color = color;
    }
    Square.prototype.draw = function () {
        //Create the div
        // Set the style using this.row, this.col, this.color
        var newDiv = document.createElement("div");
        newDiv.style.width = "".concat(this.row, "px");
        newDiv.style.height = "".concat(this.col, "px");
        newDiv.style.backgroundColor = "".concat(this.color);
        //Create the width,height randomly
        newDiv.style.position = "absolute";
        var randomTop = Math.random() * (400 - this.col);
        var randomLeft = Math.random() * (400 - this.row);
        newDiv.style.top = "".concat(randomTop, "px");
        newDiv.style.left = "".concat(randomLeft, "px");
        //Append the newDiv to the bgHTML
        bgHTML.appendChild(newDiv);
    };
    return Square;
}());
var square1 = new Square(30, 30, "red");
square1.draw();
square1.draw();
square1.draw();
square1.draw();
square1.draw();
square1.draw();
square1.draw();
