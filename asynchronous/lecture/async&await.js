const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function divideAB({a,b}){
    const randSec = 1000 * ~~(Math.random() * 5);
    console.log(`Result ${a}/${b} will appear in ${randSec / 1000} seconds`);

    await sleep(randSec);
    if(b === 0){
        throw `Can't divide by zero`;
    }
    return a / b;
}

(async () => {
    const res = await divideAB({a: 12,b: 6});
    console.log(`Result is : ${res}`);
})();

