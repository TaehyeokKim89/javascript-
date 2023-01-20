function solution(array) {
    const str = array.toString();
    let num = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === '7')

            ++num;
    }
    return num;
}
const array = [7, 77, 17];
let sol = solution(array);
console.log(sol);

