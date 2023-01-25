function solution(a, b, n) {
    let coke = 0; // 돌려 받을 빈 콜라병
    while (n >= a) { // n이 a보다 크거나 같다면
        coke += Math.floor(n/a)*b // coke에 n/a의 몫의 정수값에 곱하기 b를 해준다.
        n = Math.floor(n/a)*b + n%a;// n/a의 몫*b 에 n/a 나머지값을 더하면 남은 콜라가 된다. 이 콜라병으로 다시 반복한다. 
    } return coke; 
}