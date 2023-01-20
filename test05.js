let my_string = 'hello';
function solution(my_string, n) {
    let answer = ""
    for( let i = 0; i < my_string.length; i++){
        let a = my_string.charAt(i).repeat(n);
        answer += a;
    } return answer;
}



let c = solution(my_string, 3)

console.log(c);
