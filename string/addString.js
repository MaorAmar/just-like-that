function addString(num1 , num2){
    let result = 0;
    let num = 1;
    let i = num1.length - 1;
    let j = num2.length - 1;
    let number1 = 0;
    let number2 = 0;
    while(i >= 0 || j >= 0){
        if (i >=  0) number1 += num1[i] * num;
        if (j >=  0) number2 += num2[j] * num;
        num *= 10;
        i--; j--;
    }
    result = number1 + number2;
    return result;
}

module.exports.addString = addString;