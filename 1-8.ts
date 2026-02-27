//this.name을 사용하고 싶다면 미리 name 타입지정을 해줘야하낟.
//Class의 return타입지정? 항상 object복사라서 굳이 할 필요 없다
//하지만 Construcor parameter 타입지정은 권장
//Rest Parameter, Default Parameter 등 가능
class Person {
  name!: string; // definite assignment assertion
  age: number;
  constructor(name: string, age: number) {
    this!.name = name;
    this.age = age;
  }
  sayHi(nickName: string): string {
    console.log("Hi, I am", this.name);
    return `Call me ${nickName}`;
  }
}

let person1 = new Person("Adam", 18);
person1.sayHi("Ad");

class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    let tax = this.price * 0.1;
    console.log(tax);
    return tax;
  }
}
let car1 = new Car("Sonata", 3000);
car1.tax();

class Word {
  num: number[];
  str: string[];
  constructor(...params: (number | string)[]) {
    this.num = [];
    this.str = [];
    params.forEach((e) => {
      if (typeof e === "string") {
        this.str.push(e);
      } else {
        this.num.push(e);
      }
    });
  }
}
let word1 = new Word("HI", 150);
console.log(word1.num);
console.log(word1.str);
