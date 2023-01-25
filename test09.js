let a = 3;
let b = 1;
let n = 20;
function solution(a, b, n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (i % a == 0) {
            count += 1;

        }
    }
    return count
}

let aa = solution(a,b,n);
console.log(aa);