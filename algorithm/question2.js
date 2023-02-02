function solution(num) {
    for (let i = 1; i <=; i++) {
        let count = 0;
        let sum = 0;
        for(let j = 0; j <input[i].length; j++ ) {
            if ( input[i][j] === "0") {
                count++;
            } else {
                count = 0;
            }
            sum += count;
        }
    }
}

console.log(solution(sums))