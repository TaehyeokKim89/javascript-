var sizes = [
  [60, 50],
  [40, 70],
  [50, 30],
  [80, 40],
];

function solution(sizes) {
  var wmaxsize = 0;
  var hmaxsize = 0;

  for (let i = 0; i < sizes.length; i++) {
    let a = sizes[i][0];
    let b = sizes[i][1];

    if (a > b) {
      if (a > wmaxsize) {
        wmaxsize = a;
      }
      if (b > hmaxsize) {
        hmaxsize = b;
      }
    } else {
      if (a > hmaxsize) {
        hmaxsize = a;
      }
      if (b > wmaxsize) {
        wmaxsize = b;
      }
    }
  }
  console.log(a, b);
}
