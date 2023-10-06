const cl=console.log;


let CreateClock =()=>{
   const Digitalclock= document.getElementById("Digitalclock")
    let d= new Date()
        let hr= d.getHours();
        let min= d.getMinutes();
let sec= d.getSeconds();
let session= "AM";

session = (hr >= 12)? "PM" : "AM";

if (hr>12){
     hr = hr - 12
}
sec= (sec < 10) ?"0" + sec : sec;
min= (min < 10) ?"0" + min : min;
hr= (hr < 10) ?"0" + hr : hr;

//if(sec < 10){
  //  sec = "0" + sec
//}
let result = `${hr}: ${min}: ${sec} ${session}`;
Digitalclock.innerHTML = result;
setTimeout(CreateClock, 1000);
}
CreateClock();
