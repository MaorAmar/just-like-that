let i = 1;

function divideAB({a,b},second = undefined){
    let c = i++;
    const randSec = second !== undefined ? second : 1000 * ~~(Math.random() * 5);
    console.log(`Result ${a}/${b} will appear in ${randSec / 1000} seconds`);

    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(b === 0){
                reject(`P${c} - Can't divide by zero`);
                return;
            }else{
                console.log(`P${c} - DONE`)
                resolve(a / b);
            }
        },randSec)
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Promise ALL
// מחזיר מערך של כל התוצאות רק לאחר שכולם סיימו

Promise.all([
    divideAB({a: 12,b: 6}),
    divideAB({a: 12,b: 1}),
    divideAB({a: 12,b: 4}),
    ])
    .then((values) => {
        console.log('Result: ', values);
    })
    .catch((err) => {
        console.log('Error is: ' ,err);
    })
    .finally(() => {
        console.log('DONE!');
    })


/////////////////////////////////////////////////////////////////////////////////////////////////////
//Promise allSettled
//מחזיר מערך עם סטטוס של מה שהצליח ומה שלא
/*
Promise.allSettled([
    divideAB({a: 12,b: 6}),
    divideAB({a: 12,b: 0}),
    divideAB({a: 12,b: 4}),
    ])
    .then((values) => {
        console.log('Result: ', values);
    })
    .catch((err) => {
        console.log('Error is: ' ,err);
    })
    .finally(() => {
        console.log('DONE!');
    })
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Promise RACE
//הראשון שסיים זה הראשון והיחידי שחוזר
Promise.race([
    divideAB({a: 12,b: 6}),
    divideAB({a: 12,b: 2}),
    divideAB({a: 12,b: 4}),
])
    .then((values) => {
        console.log('Result: ', values);
    })
    .catch((err) => {
        console.log('Error is: ' ,err);
    })
    .finally(() => {
        console.log('DONE!');
    })
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Promise ANY
//הראשון שהצליח הוא היחידי שחוזר אם כולם לא הצליחו מחזיר שגיאה על הכל
Promise.any([
    divideAB({a: 12,b: 0}),
    divideAB({a: 12,b: 0}),
    divideAB({a: 12,b: 1}),
])
    .then((values) => {
        console.log('Result: ', values);
    })
    .catch((err) => {
        console.log('Error is: ' ,err);
    })
    .finally(() => {
        console.log('DONE!');
    })*/