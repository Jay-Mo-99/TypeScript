type Type1 = { name: string; age: number };
type Type2 = { name: string; isAdult: boolean };
type FinalType = Type1 & Type2; //{name:string}
let final: FinalType = { name: "kim", age: 18, isAdult: false };

type Homework2 = { color?: string; size: number; readonly position: number[] };
let test: Homework2 = {
  size: 123,
  position: [1, 2, 3],
};
console.log(test);

type Homework3 = { name: string; phone: number; email: string };
type ExtraType = { isAdult: boolean };
type Homework4 = Homework3 & ExtraType;
let test4 = {
  name: "Betty",
  phone: 123456,
  email: "betty@gmail.com",
  isAdult: true,
};
console.log(test4);
