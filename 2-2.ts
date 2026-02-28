function myFunc(a?: string) {
  if (a && typeof a === "string") {
    console.log("a is not null and undefined");
    console.log("a is string");
    return;
  }
  if (!a) {
    console.log("a is undefined or null");
    return;
  }
}

myFunc("aa");

type Fish = { swim: string };
type Bird = { fly: string };

function myFunc2(animal: Fish | Bird) {
  //property in object
  if ("swim" in animal) {
    console.log(animal.swim);
  } else {
    console.log(animal.fly);
  }
}
let angelFish: Fish = { swim: "Yes" };
let ostrich: Bird = { fly: "No" };
myFunc2(angelFish);

class Cookie {
  name: string;
  count: number;
  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;
  }
}
let cookie1 = new Cookie("chocolate", 1);
if (cookie1 instanceof Cookie) {
  console.log(`${cookie1.name}:${cookie1.count}`);
}

let date = new Date();
if (date instanceof Date) {
  console.log(date);
}

type Car = {
  model: "Car"; //literal type
  wheel: 4; //literal type
  color: string;
};
type Bike = {
  model: "Bike"; //literal type
  wheel: "2";
  color: string;
};
//property명이 같아서 in 으로 type narrowing불가능
//literal type 으로 type narrowing
function myVehicle(param: Car | Bike) {
  if (param.model === "Bike") {
    console.log(`${param.model} has ${param.wheel} wheels`);
  } else {
    console.log(`${param.model} has ${param.wheel} wheels`);
  }
}
let mine: Car = { model: "Car", wheel: 4, color: "white" };
myVehicle(mine);

//특정타입 여부를 결정지을수 있으면 type narrowing으로 인정
