function solution(n) {
  let answer = new Set();
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer.add(i);
      }
    }
  }

  return answer.size;
}

let n = 10;
let s = solution(n);

console.log(s);
