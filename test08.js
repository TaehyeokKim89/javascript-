function solution(n) {
    for (let i = 1; i <= n ; i++ ) {
        if( 6*i % n == 0 ) { // 한판에 6조각 이니 6*i판을 사람 수 n 으로 나눴을 때 나머지가 0인 i를 결과값으로 반환하면 된다.
            return i;
        }
    }
}

//while을 활용한 방법
const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}
