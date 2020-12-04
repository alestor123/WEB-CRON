var express = require('express'),
app = express(),
port =  process.argv[2] || process.env.PORT || 3000 ,
cron = require('node-cron');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({'info':'This is the cron server'})
})
app.listen(port, () => console.log(`server running at ${port}`))
