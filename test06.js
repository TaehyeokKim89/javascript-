function solution(n) {
    let a = 0;
    for (let i= 0; i <= n; i++) {
      if(i*i == n) {
          a= i; // i*i 가 n이랑 같을 때의 i값을 구한다.
      }
    }
    if ( a == 0) { // a값이 0이면 제곱수가 없는 것이다.
        return 2;
    } else {
        return 1;
    }
}