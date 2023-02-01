function solution(nums) {
    let num = [...new Set(nums)]; // nums 중복제거 후 배열화
    return nums.length/2 >= num ? num : nums.length/2
}           // 전체마리수/2 가 종류수가 작거나 같다? 종류 수 반환 아니다? 전체마리수/2 반환
console.log(solution([3,1,2,3]));