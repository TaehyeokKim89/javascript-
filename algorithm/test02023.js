function solution(N, arr1){
    let x = [1, -1, 0, 0, 1, 1, -1, -1];
    let y = [0, 0, 1, -1, 1, -1, 1, -1];
        for(let i = 0; i <N; i++) {
            for (let j= 0; j < x.length; j++) {
                for(let k = 0 ; k < y.length; k++) {
                    arr1[i+y[k]].map( (x) => console.log( x[j+k]))
                }
            } 
            
	                
                    
               
            
        }
       

	let answer=[];
	
}
let N = 5;
let arr1=[['1', '.', '.', '.', '.'], 
            ['.', '.', '3', '.', '.'], 
            ['.', '.', '.', '.', '.'],
            ['.', '4', '.', '.', '.'], 
            ['.', '.', '.', '9', '.']]; 
console.log(solution(N, arr1))