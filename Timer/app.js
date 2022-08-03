// var disHour = document.getElementById('hour');
// var dismin = document.getElementById('min');
// var dissec = document.getElementById('sec');

// function start(){
//     var userHours = document.getElementById('userHours').value;
//     var usermints = document.getElementById('usermints').value;
//     var sec = 59;
//     disHour.innerHTML = userHours;
//     dismin.innerHTML = usermints;
//     dissec.innerHTML = sec;

//     setInterval(timer,1000)
// }

// function timer(){
//     dissec.innerHTML = dissec.innerHTML - 1;
//     if(dissec.innerHTML == 0){
//         dismin.innerHTML = dismin.innerHTML - 1;
//         dissec.innerHTML = 59;
        
//         if(dismin.innerHTML==0){
//         disHour.innerHTML= disHour.innerHTML-1;
//         dismin.innerHTML = 59;
//     }
// } 
// }



var disHour = document.getElementById('hour');
var dismin = document.getElementById('min');
var dissec = document.getElementById('sec');
var dissec = document.getElementById('sec');

function init(){
var userHours = document.getElementById('userHours').value;
var usermints = document.getElementById('usermints').value;
var sec = 59;
disHour.innerHTML = userHours;
dismin.innerHTML = usermints;
dissec.innerHTML = sec;
}

function timer(){
    dissec.innerHTML = dissec.innerHTML - 1;
    if(dissec.innerHTML==0){
        dismin.innerHTML = dismin.innerHTML - 1;
        dissec.innerHTML = 59;
    if(dismin.innerHTML==0){
        disHour.innerHTML= disHour.innerHTML-1;
        dismin.innerHTML = 59;
    }
} 
}
function start(){

    init();
    setInterval(timer,1000)
}




