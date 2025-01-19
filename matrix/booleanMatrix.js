function booleanMatrix(matrix){
    const C = {};
    const R = {};

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length;j++){
            if(matrix[i][j] === 1){
                C[j] = true;
                R[i] = true;
            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length;j++){
            if(R.hasOwnProperty(i)||C.hasOwnProperty(j)){
                matrix[i][j] = 1;
            }
        }
    }
    return matrix;
}
module.exports.booleanMatrix = booleanMatrix;