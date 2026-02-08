//
//function name(x:type):type
//return type이 void면 return값 없을떄만 작동/
//x?:type => x는 type이거나 undefined => optional parameter
//x?: number === x:number | undefined(Union Type)

function duplicate(x?: number, y?: string) {
  //return result;
}

//에러가 난 이유
//엄격한 타입검사 때문에 optional parameter는 특정 type처럼 계산할수 없다?
//+ 연산은 string + number, number + number만 가능, 이외엔 불가능
//Union Type에선 불가능
function add3(x: number | string) {
  //console.log(x + 3);
  //애매한 타입들은 미리 타입검사 필요
  if (typeof x === "number") {
    console.log(x + 3);
  }
}

add3(3);
