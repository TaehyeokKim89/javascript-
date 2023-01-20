let s1 = ["a", "b", "c"]
let s2 = ["com", "b", "d", "p", "c"]
function solution(s1, s2) {
    let a = s1.filter(x => s2.includes(x));
    return a.length;
}
console.log(solution(s1,s2));
//두 배열 중복값 찾기
//중첩 반복문 !
function solution2(s1, s2) {
    let sum = 0;
    for(let i = 0; i < s1.length ; i++) {
        for(let j = 0; j < s2.length; j++) {
            if(s1[i] == s2[j]) {
                sum++;
            }
        }
    }
    return sum;
}
console.log(solution2(s1, s2));