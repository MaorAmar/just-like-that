function reversNumber(num){
    let result = 0;
    let currNum = 0;
    let minus = x < 0 ? true : false;
    if (minus === true) x *= -1;
    while(x > 0){
        result *= 10;
        currNum = x % 10;
        result = result + currNum;
        x = Math.floor(x / 10);
    }
    if (minus === true) result *= -1;
    return result;
     //test

}

