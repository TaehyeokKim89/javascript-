function solution(my_string) {
    let answer = 0;
    let str = my_string.replace(/[^0-9]/g, '');
    for (let i = 0; i < str.length; i++) {
        answer += parseInt(str[i]);
    }
    return answer;
}
console.log(solution("1a2b3c4d123"));