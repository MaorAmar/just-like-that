function zigzagConversion(str,n){
    if (n === 1) return str;
    let i = 0;
    let isDown = true;
    const matrix = Array.from({ length: n }, () => []);
    let result = '';

    for(const c of str){
        matrix[i].push(c);

        if(isDown === true) i++;
        else i--;

        if(i === 0) isDown = true;
        if(i === n-1 ) isDown = false;

    }

    for (const row of matrix) {
        result += row.join('');
    }

    return result;
}
console.log(zigzagConversion('PAYPALISHIRING',4))