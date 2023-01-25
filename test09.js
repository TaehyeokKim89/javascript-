function solution(n) {
    let answer = []; // 담을 빈 배열 선언;
    for (let i = 1; i <= n ; i++) {
        if ( n%i == 0) {   // n/i 의 나머지가 0일 때 i값
            answer.push(i); // i값을 answer에 넣어준다.
        }
    }
    return answer.sort((a,b) => a-b); //answer를 오름차순으로 정렬해준다.
}