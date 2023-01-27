let a = 6;
let b = 24;
let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];//요일명이 담긴 배열을 만든다.
let date = new Date(`2016-${a}-${b}`).getDay(); //Date 함수는 날짜를 
let dateNumber = week[date];

console.log(dateNumber);
