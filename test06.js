function solution(array) {
    array.sort((a,b) =>(a-b)); //array 오름차순 정렬
    return array[Math.floor(array.length/2)];// array 길이를 2로 나눈 몫에 소수점을 버린값이
                                                // array의 중앙값
}
console.log(solution([1, 2, 7, 10, 11]));