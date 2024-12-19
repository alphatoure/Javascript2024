function getRandom(max, min){
    return Math.floor(Math.random() * (max- min)) + min
}

console.log(getRandom(4, 20));
