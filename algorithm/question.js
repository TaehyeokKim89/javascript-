function solution(s){
    let str = s.toLowerCase(); // 문자열 통일 위해 소문자로 변환 
    let countP = 0; // p를 카운트 하기 위한 초기값 0 선언;
    let countY = 0; // y를 카운트 하기 위한 초기값 0 선언;
    for (let i = 0; i < str.length; i++) {
        if( str[i] == "p") {  //문자열에 "p"가 포함될 때 카운트를 더해준다.
            countP++;
        } else if (str[i] =="y") {//문자열에 "y"가 포함될 때 카운트를 더해준다.
            countY++;
        }
    }
    return countP==countY;   
}

// 간단한 풀이
 function solution2(s) {
    return s.toLowerCase().split('p').length 
        == s.toLowerCase().split('y').length;
 }

 console.log(solution2("pPoooyY"));