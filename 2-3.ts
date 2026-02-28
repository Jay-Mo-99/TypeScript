//never type
//never는 발생할 수 없는 타입이며,
// 모든 경우가 소진되었거나 함수가 정상적으로 종료되지 않을 때 나타난다.
//No end point - 끝나지 않는 함수
//- throw new Error
//- Infinite loop
function myFunc(): never {
  //throw new Error("Error"); //Quit the function with No endpoint
  while (true) {
    //Infinite loop
  }
}
myFunc();

//When can we use the never type
//1. 이상한 narrowing
function myFunc2(param: string) {
  if (typeof param === "string") {
    console.log(param);
  } else {
    //이때의 param은 never type이다
    //있을수 없는 case -> string이외엔 에러니까 애초에 이구간은 발생 불가능
    console.log(param);
  }
}
//2.function never return
let myFunc3 = function () {
  throw new Error();
};
