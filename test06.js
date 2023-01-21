function solution(n) {
    let answer = n.toString().split(""); //문자열로 바꾸고, 배열로 변환
    let sum = 0;
    for (let i = 0; i < answer.length; i++) {
        sum += parseInt(answer[i]); //배열의 각 자리의 수를 정수화 시켜서 더해준다.
    }
    return sum;
}