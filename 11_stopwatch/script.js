var hours = 00;
var minuts = 00;
var seconds = 00;
var milliseconds = 00;

var h = document.querySelector("#hours");
var m = document.querySelector("#minutes");
var s = document.querySelector("#seconds");
var ms = document.querySelector("#milliseconds");

let interval;

var start = document.querySelector("#startbtn");
var stop = document.querySelector("#stopbtn");
var reset = document.querySelector("#resetbtn");



start.addEventListener("click",function(){
    clearInterval(interval);
    var oneSecond =10;
    interval = setInterval(startTimer, oneSecond);
})

function startTimer(){
    milliseconds++;
    if(milliseconds <10){
        ms.innerHTML="0", +milliseconds;
    }if(milliseconds >10){
        ms.innerHTML = milliseconds;
    }

    //increase seconds
    if(milliseconds >99){
        seconds++;
        s.innerHTML = seconds;
        milliseconds = 0;
        ms.innerHTML = "0" +0;
    }
    if(seconds <10){
        s.innerHTML ="0" +seconds;
    }
    if(seconds >10){
        s.innerHTML = seconds;
    }

    //increase minutes
    if(seconds >59){
        minuts++;
    m.innerHTML = minuts;
    seconds =0;
    s.innerHTML = "0" +0;
    }
    if(minuts <10){
        m.innerHTML = "0" +minuts;
    }
    if(minuts >10){
        m.innerHTML = minuts;
    }

    //increase hours
    if(minuts >59){
        hours++;
        h.innerHTML = hours;
        minuts=0;
        m.innerHTML = "0" +0;
    }
    if(hours <10){
        h.innerHTML = "0" +hours;
    }
    if(hours >10){
        h.innerHTML = hours;
    }
}


stop.addEventListener("click",function(){
    clearInterval(interval);
})

reset.addEventListener("click",function(){ 
     hours = 00;
     minuts = 00;
     seconds = 00;
     milliseconds = 00;

     h.innerHTML = "0" +hours;
     m.innerHTML = "0" +minuts;
     s.innerHTML = "0" +seconds;
     ms.innerHTML = "0" +milliseconds;

})