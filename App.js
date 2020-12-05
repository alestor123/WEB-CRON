#!/usr/bin/env node

require('dotenv').config()
var express = require('express'),
app = express(),
chalk = require('chalk'),
pck = require('./package.json'),
argv = process.argv[2],  
port =  argv || process.env.PORT || 3000,
cron = require('node-cron'),
key = process.env.KEY || process.argv[3] || 'key',
{ exec } = require('child_process');
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if(argv== '-v' ||argv == '--version'){
    console.log( `${pck.version}`)
  process.exit(1);
}
else if (argv =='-h'|| argv == '--help') { // checking undifined args
    console.log(`
    Usage: ${pck.name} <Port> <Key>
`);
}
else if (argv =='-i'|| argv == '--issue') { // checking undifined args
  console.log(`
  Issues at ${pck.bugs.url} 
`);
}

else if (argv =='-a'|| argv == '--author') { // checking undifined args
  console.log(`
  Author: ${pck.author} 
`);
}

else if (argv =='-d'|| argv == '--docs') { // checking undifined args
  console.log(`
  Docs at ${pck.homepage} 
`);}

else{
    app.listen(port, () => console.log(chalk.green(`Server running at ${port}`)))
    console.log(chalk.green('Your Auth Key : ' + key))
}

app.post('/api/v1', (req, res) => {
if(req.body.key==key){
console.log(chalk.green(Date() + ': Command : ' +req.body.command))
res.send('Sucess')
cron.schedule(req.body.cron, () => {
exec(req.body.command, (err) => {   
console.log(chalk.red(Date() + ': exec' + req.ip + ' Command : ' + req.body.command))
if (err) {
console.error(chalk.red(`exec error: ${err}`));   
}});
})}
else{
    res.status(401).send('Auth Error')
    console.log(chalk.red(Date() + ':' + req.ip + ' Auth Error 401'))
}})
