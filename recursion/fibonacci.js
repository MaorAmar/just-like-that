function fibonacciMemoized(num){
    const objFibo = {};
    function fibonacci(num){
        if(num <= 1) return 1;
        if(!objFibo[num - 1]) objFibo[num - 1] = fibonacci(num - 1);
        if(!objFibo[num - 2]) objFibo[num - 2] = fibonacci(num - 2);
        return objFibo[num - 1] +objFibo[num - 2];
    }

    return fibonacci(num);
}
module.exports.fibonacciMemoized = fibonacciMemoized;
/*
function fibonacci(n){
    const result = fibonacciTailRecursive(n)
    function fibonacciTailRecursive(n, a = 1, b = 1) {
        if (n === 0) return a;
        if (n === 1) return b;
        return fibonacciTailRecursive(n - 1, b, a + b);
    }
    return result;
}

console.time('fibonacciMemoized');
console.log(fibonacciMemoized(50));
console.timeEnd('fibonacciMemoized');

console.time('fibonacciMemoized');
console.log(fibonacci(50));
console.timeEnd('fibonacciMemoized');

 */