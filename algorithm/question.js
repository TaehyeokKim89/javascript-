function solution(x, n) {
    let answer = [];
    let a = 0;
    for(let i = 0; i < n; i++) {
        answer.push( a += x);
    }

    return answer;
}
console.log (solution(-4,2));