// שאלה 1
//חישוב עצרת לדוגמה 6! = 720

function recursionExample(num) {
    if(!num) return 1;
    return num * recursionExample(num - 1);
}
//console.log(recursionExample(6))

// להדפיס * בפרמידה
function printStar(num){
    if (!num) return 1;
    printStar(num - 1);
    return console.log('*'.repeat(num));

}
//printStar(5)

//למצוא מקסימום
function findMax(arr){
    if (arr.length === 1) return arr[0];
    let currNum = arr[0];
    let nextNum = findMax(arr.slice(1));
    return currNum > nextNum ? currNum : nextNum;
}
//console.log(findMax([5,10,2,15,2,3]));

// לבדוק אם כל המערך מספרים חיוביים
function allPositive(arr){
    if(arr.length === 0) return 1;
    const num = arr.slice(1);
    return +(arr[0] >= 0 && allPositive(num));
}

function everyRec(numbers){
    if(!numbers.length) return 1;
    const [n , ...rest] = numbers;
    return +(n >= 0 && everyRec(rest));
}
//console.log(allPositive([1,5,3,2,4,-9]));
//console.log(everyRec([1,5,3,2,4,9]));

function printReverse(arr){
    if(!arr.length) return arr[0];
    const [n , ...rest] = arr;
    printReverse(rest);
    console.log(n)
}
//printReverse([1,5,3,2,4,9]);
// בדיקה אם המספר ראשוני
function isPrime(num){
    return primeNumber(num, num - 1)
}
function primeNumber(num , n){
    if(n === 1 || n === 0) return true;
    return num % n !== 0 && primeNumber(num,n - 1)
}
//console.log(isPrime(1));

// להדפיס את כל המספרים שהם ראשוניים עד n מסויים
function printAllPrimes(n){
    if (n === 0) return 1;
    const prime = isPrime(n);
    printAllPrimes(n - 1);
    return prime === true && console.log(n);
}
//printAllPrimes(100);

function fibonacci(num){
    if(num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(10));
