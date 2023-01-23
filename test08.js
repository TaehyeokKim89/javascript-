function solution(my_string) {
    let answer=[];
    let str = my_string.split(""); // 문자열을 배열로 변환한다.
    for(let i=0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() ) { // 배열을 순회하여 각 원소들을 대문자인지 판단한다.
            answer.push(str[i].toLowerCase())  // 대문자이면 소문자로 변환하여 다시 배열에 집어 넣는다.
        } else {
            answer.push(str[i].toUpperCase())// 소문자이면 대문자로 변환하여 다시 배열에 집어 넣는다.
        }
    }
    return answer.join(""); // 배열을 문자열로 반환한다.
}