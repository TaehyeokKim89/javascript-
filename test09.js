function solution(my_string) {
    let a = my_string.split("");
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b.push(a[i].toLowerCase());
    }
    return b.sort().join("");
}