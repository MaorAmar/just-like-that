const axios = require('axios');
//GET
axios.request({
    method: 'GET',
    url : 'https://v2.jokeapi.dev/joke/Any',
    params : {
        'safe-mode' : true
    }
    }).then(response => {
        console.log(JSON.stringify(response.data,null, 1));
    })
    .catch(response => {
        console.log(response);
    })

