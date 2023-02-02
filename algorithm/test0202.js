//문제 하. 물건을 구매해볼까?

function solution(num){
	let coin = [500, 100, 50, 10];
	let change = 1000 - num; //거슬러줄 돈을 구해 변수로 선언한다. change = 840원
	let count = 0;  //동전의 갯수의 초기값을 0으로 선언한다. 
	for( let i = 0; i < coin.length; i++) {
		//동전 갯수를 최소로 걸러주려면 큰 단위인 500원부터 거슬러줄 수 있는 갯수를 구한다.
		count += parseInt(change/coin[i])
		//거슬러줄 돈을 500원으로 나누면 1.xxx의 수가 나온다 즉, 1개를 거슬러줄 수 있다.  이 값을 카운트에 더한다.
		change = change%coin[i];
		// 500원을 거슬러주면 340원이 남는다. 즉, 거슬러줄돈을 동전단위로 나눈 나머지 값으로 거슬러줄 돈을 다시 선언해준다.
		// 500원 1번, 100원 3번, 50원 0번, 10원 4번 총 8번 카운트 됐고 즉, 8개의 동전이 최소 동전이다.
	}   
	return count;  
}
let num1 = 160;
console.log(solution(num1));