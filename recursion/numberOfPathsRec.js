function numberOfPathsRec(m, n) {
    function numberOfPathsRec2(r, c) {
        if (r === m - 1 && c === n - 1) {
            return 1;
        }
        if (r >= m || c >= n) {
            return 0;
        }
        return numberOfPathsRec2(r + 1, c) + numberOfPathsRec2(r, c + 1);
    }

    // Start the recursion from the top-left corner
    return numberOfPathsRec2(0, 0);
}
console.log(numberOfPathsRec(3, 3));
module.exports.numberOfPathsRec = numberOfPathsRec;