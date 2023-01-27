function solution(s) {
    let a = parseInt(s); //s를 정수화, 문자 포함이면 NaN값
    if ( (s.length == 4 || s.length == 6) && s == a) {
        a = true ;   //s의 길이가 4또는 6이면서 s와 a가 같을때
    } else {
        a = false; 
    }
    return a; 
}
