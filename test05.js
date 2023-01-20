let sides = [199,72, 222];
function solution(sides) {
    let a = sides.sort((a, b) => (a - b));
    if (a[0]+a[1] > a[2]) {
        return 1;
    } else {
        return 2;
    }
}

let b = solution(sides)
console.log(b);

