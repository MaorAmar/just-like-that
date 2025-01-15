function sortRandB(arr){
    let i = 0;
    let j = arr.length -1 ;

    for( let index = 0;index < arr.length; index++){
        if(arr[index] === 'B') arr[index] = 0;
        else arr[index] = 1;
    }
    while (i < j){
        if ( arr[i] === 1 && arr[j] === 0) {
            arr[i] = 0; arr[j] = 1;
            i++; j--;
        }
        else if ( arr[i] === 0 ) i++;
        else if (arr[j] === 1) j--;
        else return arr;

    }
    return arr;
}

function sortRandB2(arr){
    let i = 0;
    let n = 0;

    for( let index = 0;index < arr.length; index++){
        if(arr[index] === 'B') arr[index] = 0;
        else arr[index] = 1;
    }
    while ( n++ < arr.length){
        const [ bit ] = arr.splice(i, 1);
        if(bit === 1) {
            arr.push(bit);
        }
        else {
            arr.unshift(bit);
            i++;
        }

    }
    return arr;
}
const arr = ['R','R','R','B','R']
console.log(sortRandB2(arr));
module.exports.sortRandB = sortRandB;
module.exports.sortRandB2 = sortRandB2;