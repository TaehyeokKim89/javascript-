function solution(price, money, count) {
    let answer = 0; // 초기값 0으로 선언
    for (let i = 1; i<=count; i++ ) {
        answer += price*i //i는 카운트만큼 타는 횟수 * price 나온 값은 answer 에 더해준다.
    }
    if (answer > money) { //answer > money일 때 부족한 것이므로
        return answer - money;// anwer-money로 부족한 금액 반환
    } else { //아니라면 부족한게 아니므로 0을 반환
        return 0;
    }    
}