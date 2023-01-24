function solution(my_string) {
    let string = my_string.replace(/[^0-9]/g,"");//숫자가 아닌 값을 ""로 대체한다.
    let a = string.split("").map(Number);//추출한 값을 배열로 전환하고, 배열을 요소들을 숫자값으로 변환한다.
    let b = a.sort()// 변환된 배열을 오름차순으로 정렬한다. 
    return b;
}