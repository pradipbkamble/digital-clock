let cl =console.log;

let bgcolor=document.getElementById("bgcolor");
let alld=[...document.querySelectorAll(".all")]


let galaryfilter=(eve)=>{
  cl(eve.target.value)
let classname= eve.target.value;
alld.forEach(diva =>
  diva.classList.add(`d-none`))

  const selectdiv=[...document.getElementsByClassName(classname)]
selectdiv.forEach(ev1=>
  ev1.classList.remove(`d-none`))

}
bgcolor.addEventListener("change",galaryfilter);