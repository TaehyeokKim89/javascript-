function solution(numbers, direction) {
    if ( direction == "right") {
        numbers.unshift(numbers.pop(numbers));
    } else if ( direction == "left") {
        numbers.push(numbers.shift(numbers));
    }
    return numbers;
}