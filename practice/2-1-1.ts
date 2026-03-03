function maximum(...rest: [number, ...number[]]): number {
  if (rest.length === 0) {
    throw new Error("At least one number required");
  } else {
    let result: number = rest[0];
    for (let i = 1; i < rest.length; i++) {
      if (result < rest[i]) {
        result = rest[i];
      }
    }
    return result;
  }
}

maximum(1, 2, 7, 5);
maximum();
