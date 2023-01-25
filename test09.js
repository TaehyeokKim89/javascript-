function solution(my_string, num1, num2) {
    let answer = my_string.split(""); // 문자열을 배열로 전환한다.
    let a = answer[num2];    // a를 answer[num2]로 선언한다.
    answer[num2] = answer[num1]; // answer[num2]를 answer[num1]로 바꾼다.
    answer[num1] = a; //answer[num1] 은 a로 바꾼다.
    return answer.join(""); //배열을 문자열로 전환한다.
}