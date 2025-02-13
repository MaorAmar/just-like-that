function numberOfPaths(R,C) {
    const matrix = Array(R).fill(0).map(() =>Array(C).fill(0))
    for(let i = 0; i < R; i++){
        matrix[i][0] = 1;
    }
    for(let j = 0; j < C; j++){
        matrix[0][j] = 1;
    }
    for(let i = 1;i < R;i++){
        for(let j = 1;j < C; j++){
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[R-1][C - 1];
}
module.exports.numberOfPaths = numberOfPaths;
