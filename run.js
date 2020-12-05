var axios = require('axios')
axios.post('http://localhost:3000/api/v1', {
command:'rm -r ./err.log',
cron:'1 * * * * *'
})  

// add css mobile friendly
// add auth 
// add cli
// add docs 
// add crud crone 
