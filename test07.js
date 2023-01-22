
// 세균 n마리는 t시간이 주어질때 1시간 마다 두 배씩 증가한다.
// n 마리에 2에 t승만큼 곱해주면 된다.
function solution(n, t) {
    let result = 2;  //처음값은 2이므로 2의값의 변수를 선언해준다.
    for (let i = 1; i < t; i++) {
        result *= 2; // i가 t만큼 돌때 2를 2로 계속 곱해준다.
    } return n * result;
}

console.log(solution(10, 15));

function solution2(n, t) {
    return n * Math.pow(2,t); // 내장함수 Math.pow를 쓰면 간단해진다.
                                // 내장함수 Math.pow를 풀어쓰면 위의 과정이다.
}
console.log(solution(7,15));