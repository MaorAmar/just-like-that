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
    try{
        console.error('Start!');
        {
            const res = await divideAB({a: 1,b: 3});
            console.log('Result 1 is : ' ,res);
        }
        {
            const res = await divideAB({a: 1,b: 2});
            console.log('Result 2 is : ' ,res);
        }
        {
            const res = await divideAB({a: 3,b: 6});
            console.log('Result 3 is : ' ,res);
        }
    }catch(err){
        console.error('Error was catch with error: ', err);
    }
    finally{
        console.log('Finally!');
    }
    console.error('DONE!')
})();