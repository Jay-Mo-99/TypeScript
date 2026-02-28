let bgHTML = document.getElementById("bg");

class Square {
  row: number;
  col: number;
  color: string;
  constructor(row: number, col: number, color: string) {
    this.row = row;
    this.col = col;
    this.color = color;
  }
  draw() {
    //Create the div
    // Set the style using this.row, this.col, this.color
    let newDiv = document.createElement("div");
    newDiv.style.width = `${this.row}px`;
    newDiv.style.height = `${this.col}px`;
    newDiv.style.backgroundColor = `${this.color}`;

    //Create the width,height randomly
    newDiv.style.position = "absolute";
    const randomTop = Math.random() * (400 - this.col);
    const randomLeft = Math.random() * (400 - this.row);
    newDiv.style.top = `${randomTop}px`;
    newDiv.style.left = `${randomLeft}px`;

    //Append the newDiv to the bgHTML
    bgHTML.appendChild(newDiv);
  }
}

let square1 = new Square(30, 30, "red");
square1.draw();
square1.draw();
square1.draw();
square1.draw();
square1.draw();
square1.draw();
square1.draw();
