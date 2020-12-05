var command = document.getElementById('command');
function Deploy(){
if(command.value==""){
        alert('please fill out command')
    }
else{
var inputs = document.getElementsByName("quantity"),
    cron  = [].map.call(inputs,( input ) => {
        return input.value;
    }).join(' ');
var finalCron =  cron.split('0').join('*');
if(!confirm(`Cron:${cron} , Command:${ command.value}`)){
    console.log('confirmed comman')
}
 else if (
confirm("Are You Sure To Deploy")) {
var authKey =  prompt('Auth Key:','Key')
axios.post('/api/v1', {
key:authKey,
command: command.value,
cron: finalCron
})
.then((response) => {
    alert(response.data);
}).catch(function (error) {
    alert(error.response.data)
})
  
} else {
alert('Aborted')
}
}
}   
