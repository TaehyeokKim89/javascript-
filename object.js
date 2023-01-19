let strings = ["sun", "bed", "car"];

function solution(strings, n) {
  let tempArray = [];
  let answer = [];
  for (let string of strings) {
    tempArray.push(string[n] + string); // 1. 문자열 앞에 인덱스에 해당하는 문자를 붙인다.
  }
  tempArray.sort(); // 2. 사전순으로 정렬한다.
  for (let a of tempArray) {
    answer.push(a.substr(1)); // 3. 정렬된 배열의 가장 앞 글자를 땐다.
  }

  return answer;
}

let sol = solution(strings, 1);
console.log(sol);
