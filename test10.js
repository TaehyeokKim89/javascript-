function solution(num, k) {
  let number = num.toString().split("").map(Number); //
  let a = number.indexOf(k, 0);
  if (a != -1) {
    return a + 1;
  } else {
    return -1;
  }
}
