//Rest parameter: parameter로 들어오는 모든것을 array로 치환해서 받음
//만약 일반 parameter와 섞어쓸꺼면 rest parameter는 뒤로 간다
function rest(first: number, ...rest: number[] | string[]) {
  console.log(first);
  console.log(rest);
}

rest(1, 2, 3, 4);
//Spread oprator
//- swallow copy
//- 해체
let arr = [1, 2, 3];
let arr2 = ["apple", "banana", "cherry"];
let arr3 = [...arr, ...arr2];
let arr4 = [arr];
console.log(arr3);

//Destructing
let [a, b] = ["Adam", "Betty"];
console.log(b);
//Object Destructing
//Variable and key must have same names.
let { student, age } = { student: true, age: 19 };
let obj = { student, age };
//Can input the Object destructing as a param of functions
//Key and Parameters must have same names.

type myType = { student: boolean; age: number };
function myFunc({ student, age }: myType) {
  console.log(student, age);
}
myFunc(obj);

//Assignment1
//function maximum(...param): Rest Parameter [1,2,7,5]
//Math.max(...param): Math.max(1,2,7,5): Spread operator for destructing
function maximum(...param: number[]): number {
  //Using a Math.max
  //   console.log("Rest Parameter: ", param);
  //   console.log("Spread Operator-Destructing Array: ", ...param);
  //   console.log(Math.max(...param));
  let result = param[0];
  if (param.length === 0) {
    throw new Error("At least one number required as a parameter");
  } else {
    for (let i = 1; i < param.length; i++) {
      if (result < param[i]) {
        result = param[i];
      }
    }
  }
  return result;
}

maximum(1, 2, 7, 5);

//Assignment2
type myType2 = { user: string; comment: number[]; admin: boolean };
function myFunc2({ user, comment, admin }: myType2) {
  console.log(user, comment, admin);
}
myFunc2({ user: "kim", comment: [3, 5, 4], admin: false });

//Assignment3
type myType4 = (number | string | boolean)[]; //Union Type
//The array can have any length.
// Each element can be one of the union types defined above.
type myType3 = [number, string, boolean];
//Tuple Type: Define the array with a fixed number of elements, where each position has a specific type.
function myFunc3([first, second, third]: myType4) {
  console.log(first, second, third);
}

myFunc3([40, "wine", false]);
