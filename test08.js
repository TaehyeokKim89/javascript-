function solution(age) {
    let answer = [];
    let a = String(age).split(""); // 주어진 나이가 숫자이므로 문자로 변환한 뒤, 배열의 로 변환한다.
    let showAge = [ "a","b","c","d","e","f","g","h","i","j"];// 전환될 배열
    for (let i = 0 ; i < showAge.length; i++) { 
        answer.push(showAge[a[i]]);  //변환 된 a 배열을 반복하여 그 위치의 값으로 showAge의 인덱스값을 결정하고,
                                    // 그 인덱스값으로 shoAge배열의 위치의 값을 answer배열에 넣는다. 
    }
        
    return answer.join(""); // 배열을 다시 문자열로 반환한다.
}