function solution(price) {
    if (price >=100000 && price < 300000) {
        return price * 0.95;
    }
    if (price >=300000 && price < 500000) {
        return price * 0.90;
    }
    if (price >=500000) {
        return price * 0.80
    }
}
console.log(solution(580000))