function solution(n, m) {
    let a = []; //n의 약수 받을 배열
    let b = []; //m의 약수 받을 배열
    let answer = [];
    for ( let i =1; i <=1000000; i++ ) {
        if ( n % i === 0) {
             a.push(i);      
        }
        if ( m % i === 0) {   //약수는 나누어 떨어지는 수들이므로 나누어 떨어지는 각각의 수를 배열에 넣는다.
             b.push(i);
        }
    }
    let c = a.filter ( (x) => isPrime(x) == true  );  //약수 중 소수를 판별해 배열로 반환한다.
    let d = b.filter ( (x) => isPrime(x) == true  );
    answer.push(c.filter((x) => d.includes(x))   // 주어진 두 수의 소수 배열 중 겹치는 걸 가져온다.
                 .reduce((a,b) => a*b ,1)); //겹치는 소수를 곱하면 최소공약수가 된다.
    if ( m >= n) {
        if ( m%n === 0){
            answer.push(parseInt(m/n) * n);  // 두 수 중 큰수를 분모로 작은수를 분자로 했을 때
    } else {                                 // 나누어 떨어지면 그 몫과 작은수를 곱하면 최소공배수이고,
            answer.push( m * n);            // 나누어 떨어지지 않으면 두 수의 곱의 최소공배수가 된다.
        }        
    } else if ( n >= m ) {
        if ( n % m === 0) {
            answer.push(parseInt(n/m) * m);
        } else {
            answer.push ( n * m);
        }        
    } 
    return answer.sort((a,b)=> a-b);   
}
function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for(let i = 2; num > i; i++) {
    if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
     }
    }
   // 소수는 1보다 큰 정수임으로
   // 1보다 작으면 false를 리턴한다
   return num > 1;
  }
console.log(solution(500,5000));