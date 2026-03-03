type UserType = { user: string; age?: number };

function printUser({ user: name, age = 0 }: UserType) {
  console.log(`name=${name}, age=${age}`);
}
printUser({ user: "kim" });

function logData([a, b, c]: [number, string, boolean]) {
  console.log(a, b, c);
}

logData([1, "a", true]); // ✅ 가능
logData([1, "a"]); // ❌ 컴파일 에러
logData([1, "a", true, false]); // ❌ 컴파일 에러
