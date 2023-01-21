function solution(hp) {
    let generalAnt = parseInt(hp/5);
    let soldierAnt = parseInt((hp%5)/3);
    let Ant = (hp%5)%3;
    return generalAnt+soldierAnt+Ant;
}