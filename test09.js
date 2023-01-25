function solution(n) {
    let str = String(n); //숫자를 문자로 변환한다.
    let a = Array.from(str).map(Number); // 변환된 문자를 배열로 만들고, 배열안을 다시 숫자로 변환해준다.
    let answer = a.reverse(); // a의 안의 배열을  reverse를 활용해 뒤집어준다.
    return answer;
}