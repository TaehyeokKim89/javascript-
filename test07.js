function solution(n, numlist) {
    let answer=[];
    for (let i = 0; i < numlist.length; i++) {
        if ( numlist[i] % n == 0) {  //n의 배수는 배열의 숫자를 n으로 나눴을 때 나머지가 0이다.
            answer.push(numlist[i]);
        }
    } return answer;
}