function solution(my_string) {
    let str = ["a", "e", "i", "o", "u"]
    let b = my_string.split(str[0]).join("")
    let c = b.split(str[1]).join("")
    let d = c.split(str[2]).join("")
    let e = d.split(str[3]).join("")
    let f = e.split(str[4]).join("")
    return f;
}
console.log(solution("nice to meet you"))



function solution2(my_string) {
    return my_string.replace(/[aeiou]/ig, '');
}
console.log(solution2("nice to meet you"));

