class Character {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}

//Old Syntax using function
function char(q, w) {
  this.q = q;
  this.w = w;
}
char.prototype.name = "Kim";

let char1 = new char("consume", "snowball");
let garen = new Character("a", "b");
console.log(char.prototype);
console.log(char1.name);
Array.prototype.functionA = function () {
  console.log("A");
};
let arr1 = [1, 2, 3];
arr1.functionA();
