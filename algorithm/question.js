function solution(arr1, arr2) {
    let answer = [[]]; //빈 이중 배열 선언; 
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = []; //answer[i]의 빈 배열을 선언하고, arr1의 길이만큼 i를 돌린다.
        for (let j = 0; j <arr1[i].length; j++) {
            answer[i].push(arr1[i][j]+arr2[i][j]); // j는 arr[i]의 길이만큼 돌린다. 
        }                                           //answer[i] arr1[i][j]와 arr2[i][j]의 합을 더해서 넣어준다.
    }
    return answer;
}
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));