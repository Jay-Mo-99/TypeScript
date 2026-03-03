//Bring the container elements
let container = document.getElementById("container");

class Square {
  row: number;
  col: number;
  bgColor: string;
  constructor(row: number, col: number, bgColor: string) {
    this.row = row;
    this.col = col;
    this.bgColor = bgColor;
  }
  draw() {
    //Create the square instance based on the parameters (row, col, bgColor)
    let squareDiv = document.createElement("div");
    squareDiv.style.width = `${this.row}px`;
    squareDiv.style.height = `${this.col}px`;
    squareDiv.style.backgroundColor = this.bgColor;
    squareDiv.style.position = "absolute";
    //Create the random (x,y) inside of the container element(400x400)
    const randomX = Math.random() * (400 - this.row);
    const randomY = Math.random() * (400 - this.col);

    squareDiv.style.left = `${randomX}px`;
    squareDiv.style.top = `${randomY}px`;

    //Draw that square element appends the container element following the random (x,y) position
    container?.appendChild(squareDiv);
  }
}

let square = new Square(30, 30, "red");
square.draw();
square.draw();
square.draw();
square.draw();
let square2 = new Square(30, 30, "blue");
square2.draw();
