var axios = require('axios')
axios.post('http://localhost:3000/api/v1', {
command:'echo lol',
cron:'1 * * * * *'
})  