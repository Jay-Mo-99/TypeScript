//Type Aliases
//- 타입별칭
//- Using Capitalized Names

type Animal = string | number | undefined;
type Flower = { name: string; color: string; quantity: number };

let animal: Animal = "dog";
console.log(animal);

let flower: Flower = { name: "rose", color: "red", quantity: 4 };
console.log(flower);

//JS에서는 const여도 object의 속성은 변경가능, 재할당만 막을뿐
//TS에서는 object 자료수정을 막는 방법이 있다.
//-readonly: 객체의 속성을 바꿀수 없다
//-type이 달
const region = { name: "Seoul", visit: true };
region.visit = false;
type Song = {
  readonly name: string; //Locked Property
  singer?: string;
  repeat: number;
};
const song: Song = { name: "Love Dive", repeat: 7 };
//song.name = "After Like"; //하지만 JS 파일엔 바꿔준다(에디터, 터미널에서만 존재)
console.log(song);

//type alias 끼리 union type 가능
type Name = string;
type Age = number;
type Person = Name | Age;
let person1: Person = "Adam";
let person2: Person = 40;
//type alias 끼리 intersection type 가능
type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY; //{x:number, y:number}
let p1: Position = { x: 1, y: 2 };
console.log(p1);
