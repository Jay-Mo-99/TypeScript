//***Type */
//& :intersection type
//두타입을 전부 만족하는 타입
//중복선언 불가능(엄격)
//type Animal = { name: string };
//type Animal = { color: string };
//type Cat = { age: number } & Animal;
//let animal1: Animal = { name: "Kitty" };
//console.log(animal1);
//***interface */
//Object 타입 지정시 interface사용가능
//extends 가능
//중복선언시 type 합쳐짐(유연)
//외부 라이브러리에서 자주 이용
// -> 다른사람 이용이 많다면 object타입 interface가 더 유리
interface Student {
  name: string;
}
interface Professor extends Student {
  name: string;
  age: number;
}
interface Student {
  score: number;
}
let student1: Student = { name: "Kim", score: 78 };
let professor1: Professor = { name: "Amy", age: 45, score: 700 };

//***Answer1
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let tv1: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};
//***Answer2
interface Cart {
  product: string;
  price: number;
}

let cart1: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
//***Answer3 */

interface Card extends Cart {
  card: boolean;
}
let card1: Card = { product: "청소기", price: 7000, card: false };

//***Answer4 */
interface MyObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let obj: MyObj = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

console.log(obj.plus(100, 200));
console.log(obj.minus(500, 300));
