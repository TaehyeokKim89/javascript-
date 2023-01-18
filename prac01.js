function solution(sizes) {
  let biggerSideMax = 0;
  let smallerSideMax = 0;

  for (let i = 0; i < sizes.length; i++) {
    // sizes의 변수들을 반복문으로 돌려준다.
    if (sizes[i][0] > sizes[i][1]) {
      if (sizes[i][0] > biggerSideMax) {
        biggerSideMax = sizes[i][0];
      }
      //  sizes 원소 중 큰값이 긴 변에 해당하고 그 값이 긴변의최대값 보다 크면 큰변의맥스값으로 할당한다.
      if (sizes[i][1] > smallerSideMax) {
        smallerSideMax = sizes[i][1];
      }
      // sizes 원소 중 작은값이 작은 변에 해당하고 그 그 값이 작은변의최대값 보다 크면 작은변의 맥스값으로 할당한다.
    } else {
      if (sizes[i][1] > biggerSideMax) {
        biggerSideMax = sizes[i][1];
      }
      if (sizes[i][0] > smallerSideMax) {
        smallerSideMax = sizes[i][0];
      }
    }
  }

  return biggerSideMax * smallerSideMax;
}

let sizes = [
  [50, 30],
  [40, 70],
  [60, 50],
  [80, 30],
];

const size = solution(sizes);
console.log(size);
