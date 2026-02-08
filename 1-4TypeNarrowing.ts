//Type Narrowing
//-타입스크립트가 타입을 확정할수 있도록 조건문으로 범위를 좁혀주는것.
//Type이 하나로 지정되지 않았을경우, Type Narrowing
//if 로 type narrowing 시, else 구문 권장 (에러 잡기 위해 )
//-typeof 변수
//-속성명 in object
//-인스턴스 instanceof 클래스명

//assertion 문법
//1. narrowing 시 사용
//2. 타입 확신시에 사용 권장 --> 타입버그 추적이 어려워짐
//3. 디버깅 비상용
function myFunc(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number; //Assertion 문법으로 타입 단언
  console.log(arr);
}
myFunc("dj");
myFunc(7);

let name: string = "Lee";
//name as number; //에러
