function myName(x?: string): string {
  let result = "";
  if (typeof x === "undefined") {
    result = "No Name";
    console.log(result);
    return result;
  }
  console.log(`My name is ${x}`);
  return `My name is ${x}`;
}

myName();

function countLetters(x: string | number): number {
  let result = 0;
  if (typeof x === "number") {
    result = x.toString().length;
  } else {
    result = x.length;
  }
  console.log(result);
  return result;
}

countLetters("hello");
countLetters(111);

function marriedPercentage(
  income: number,
  house: boolean,
  charm: string,
): string | undefined {
  let score = 0;
  if (income <= 0) {
    console.log("Impossible");
    return "Impossible";
  }
  score += income / 10000;
  if (house === true) {
    score += 500;
  }
  if (charm === "high") {
    score += 100;
  }
  if (score >= 600) {
    console.log("Possible");
    return "Possible";
  }
}
marriedPercentage(7000000, true, "medium"); // "Possible"
marriedPercentage(1000000, false, "high"); //
marriedPercentage(-100, true, "high"); // "Impossible"
