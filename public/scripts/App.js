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
alert(finalCron)
alert(`Cron:${cron} , Command:${ command.value}`)
if (confirm("Are You Sure To Deploy")) {
axios.post('/api/v1', {
command: command.value,
cron: finalCron
})  
} else {
alert('Aborted')
}
}
}   
