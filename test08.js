function solution(rsp) {
    let r = rsp.split(""); //rsp를 배열로 반환한다.
    for (let i =0; i < rsp.length; i++) {
        if ( r[i] == 2) {  //배열을 순회하여 r[i]번째가 2와 같을 때 0으로 바꾼다.
            r[i] = 0;
        } else if ( r[i] == 0) {//배열을 순회하여 r[i]번째가 0과 같을 때 5로 바꾼다.
            r[i] = 5;
        } else if ( r[i] == 5) { //배열을 순회하여 r[i]번째가 5와 같을 때 2로 바꾼다.
            r[i] = 2;
        }
    }
    return r.join("") ; // r을 다시 문자열로 반환한다.
}