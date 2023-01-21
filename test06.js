
//문제 설명
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string, letter) {
    let string = my_string.split("");   // split()으로 문자열을 배열로 만들어준다.
    for (let i = 0; i < string.length; i++) {
        if ( string[i] == letter) {         //각 문자열과 letter로 받은 변수랑 같은지 본다.
            string.splice(i,1); // splice()로 i번째 위치의 문자열을 삭제해준다.
            i--; //문자열이 하나 삭제되니, i를 감소해준다.
        }
    }
    return string.join(""); // 특정 문자가 제거된 배열을 다시 문자열로 반환한다.
}
console.log(solution("abcdef"	,	"f"))


function solution2(my_string, letter) {
    return my_string.replaceAll(letter,'') ; //replaceAll()로 레터 인자를 삭제
}

console.log(solution2("BCBdbe","B"))