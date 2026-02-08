//any: 타입실드 해제문법 => 자바스크립트처럼 자유롭게 사용 가능, 타입버그 발생 가능성 높음
//unknown:
// - any와 비슷하지만, 타입 안전성을 보장하는 타입.
// - unknown 타입의 값을 사용하기 전에 타입 검사를 해야 함

//Union Type:
// - string | number: union type

//Typescript는 같은 type의 연산만 허용
let myName: unknown;
//console.log(myName - 1);
// 오류 발생: unknown 타입은 연산이 불가능

let temp: string | number;
//console.log(temp + 1);
//union type도 연산 불가능

let temp2: unknown = 1;
//console.log(temp2 + 1);
//type이 unknown이므로 연산 불가능

let bff: (string | number)[] = ["Amily", "Bob", 7];
console.log(bff);

let favoriteFruit: { name: string; color: string } = {
  name: "Strawberry",
  color: "Red",
};
let favoriteSongs: { [key: string]: string | number } = {
  name: 404,
  artist: "KiiKii",
};
console.log(typeof myAge);
console.log(favoriteSongs);

let project: { member: string[]; day: number; started: boolean } = {
  member: ["Amy", "Betty", "Cindy"],
  day: 35,
  started: true,
};
console.log(project);

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
