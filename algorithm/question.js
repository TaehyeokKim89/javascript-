function solution(a, b) {
  let sum = 0; //더해줄 sum을 초기값 0 으로 선언
  let max = Math.max(a, b); //a,b사이에 큰 값
  let min = Math.min(a, b); //a,b 사시에 작은 값
  for (let i = min; i <= max; i++) {
    sum += i; //최소값과 최대값 그리고 사이 값을 sum에 더해준다.
  }
  return sum;
}
console.log(solution(5, 3));
