let input = require('fs').readFileSync('입력.txt').toString().split('\n');
//JS 백준문제의 입력값을 받기 위한 코드이다. 
// '입력.txt'는 입력값을 저장할 파일이고, 백준 페이지에서 정답을 확인하기 위해선 '/dev/stdin'으로 바꿔줘야한다.
let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0; //"O"의 갯수 카운트값 초기값 선언
  let sum = 0; //카운트 값들의 합 초기값 선어
 
  for (let j = 0; j < input[i].length; j++) {
    const a = (input[i][j] === "O") ? count++ : count = 0
         // 각줄의 한글자씩 가져와 "O"와 같은지 파악
        // 같다면 카운트
        //아니다면 다시 카운트를 0으로
    
    sum += count; // 카운트된 값들을 더해준다.
}
  
  console.log(sum); // 카운트된 값들의 합이 찍히고 다음 줄로 넘어가서 반복한다.
}
