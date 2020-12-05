var axios = require('axios')
axios.post('http://localhost:3000/api/v1', {
key:'dddd',
command:'ls',
cron:'1 * * * * *'
}).then((response) => {
    console.log(response.data);
})

// add auth 
// add time logging
// add chalk 
// add cli
// add docs 
// add crud crone 
