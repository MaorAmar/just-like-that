const sleep = function (milliseconds) {
    return new Promise((resolve) =>{
        setTimeout(resolve, milliseconds);
    })
};

const handleMessage = async function (milliseconds){
    const value = database.counter;
    await sleep(milliseconds);
    database.counter = value + 1;
};

const database ={
    counter: 10,
};

(async () => {
    console.log('1. handle message counter', database.counter);
    await handleMessage(1000 * 2);
    await handleMessage(1000 * 3);
    console.log('2. handle message counter', database.counter);
})();

