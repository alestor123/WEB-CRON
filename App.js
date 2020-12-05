#!/usr/bin/env node

require('dotenv').config()
var express = require('express'),
app = express(),
port =  process.argv[2] || process.env.PORT || 3000,
cron = require('node-cron'),
key = process.env.KEY || process.argv[3],
{ exec } = require('child_process');
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({'info':'This is the cron server'})
})
app.post('/api/v1', (req, res) => {
if(req.body.key==key){
console.log(req.ip + ' Command : ' +req.body.command)
res.send('Sucess')
cron.schedule(req.body.cron, () => {
exec(req.body.command, (err) => {   
console.log('exec' + req.ip + ' Command : ' + req.body.command)
if (err) {
console.error(`exec error: ${err}`);   
}});
})}
else{
    res.status(401).send('Auth Error')
    console.log(req.ip + ' Auth Error 401')
}})
app.listen(port, () => console.log(`server running at ${port}`))
