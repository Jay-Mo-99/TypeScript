type TempType = string | number;
type StockType = { color: string; quantity: number } | string[];
type StudentType = {
  [key: string]: string;
};

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let users: { name?: string; age: number } = { name: "Kim", age: 20 };

let stock: StockType = ["pants", "socks"];
console.log(stock);

function multiply100(x: string, y: number): string {
  return `${x}: ${y * 100}`;
}

console.log(multiply100("apple", 5));

let student1: StudentType = { name: "Amy", level: "3", isGraduated: "false" };
console.log(student1);
