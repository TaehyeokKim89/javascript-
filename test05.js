function solution(money) {
    var answer = [];
    let a = parseInt(money/5500);
    console.log(a);
    let b = (money % 5500)
        answer.push(a);
        answer.push(b);
        return answer;
}


let b = solution(5500);

console.log(b);