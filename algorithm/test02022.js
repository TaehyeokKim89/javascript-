//문제 중. 동그라미 엑스로 숫자를?
function solution(str){
    let count = 0; //"O" 의 갯수를 세기위해 초기값 0으로 선언
    let sum = 0;  // 카운트 된 값을 더해주기 위해 초기값 0으로 선언
	for (let i = 0; i < str.length; i++) 
     str[i] === "O" ? count ++ : count = 0;   // 각문자열을 확인해서 "O"면 카운트하고 아니면 카운트를 다시 0으로 초기화한다.
        sum += count; // 카운트값들을 sum 에 누산한다.
     return sum; // 27	
}
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))