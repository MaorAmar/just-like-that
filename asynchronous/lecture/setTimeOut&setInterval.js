setTimeout(function(){
    console.log('Just Like That!');
},1000 * 6);

let i = 5;
const intervalId = setInterval(() => {
    console.log(`Count down ${i--}`);
    if(i === 0){
        clearInterval(intervalId);

    }
}, 1000);