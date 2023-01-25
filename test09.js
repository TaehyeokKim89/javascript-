function solution(a, b) {
    let sum = 0 ; //더해줄 변수 선언
    for (let i = 0; i < a.length; i++) {
        sum += a[i]*b[i]; // a의 길이미만까지 a[i]*b[i] 의 값을 sum에 더해준다.
    }
    return sum;
}