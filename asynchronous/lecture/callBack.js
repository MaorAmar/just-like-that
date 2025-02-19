function divideAB({a,b},successfulCB, failureCB){
    const randSec = 1000 * ~~(Math.random() * 5);
    console.log(`Result ${a}/${b} will appear in ${randSec / 1000} seconds`);

    setTimeout(()=>{
        if(b === 0){
            failureCB(`Cant divide by zero`);
            return;
        }
        successfulCB(a / b);
    },randSec)
}

divideAB(
    {a: 6,b: 0}, (res) => {
        console.log(`Divide a/b result: ${res}`);
    },
    (error) =>{
        console.log(`Error: ${error}`);
    }
)