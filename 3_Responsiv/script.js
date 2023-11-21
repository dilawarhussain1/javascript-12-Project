function  toggleBtn(x){
    x.classList.toggle("change");
}

const navloggo = document.querySelector(".toggle-icon");
const link = document.querySelector(".links");
 
navloggo.addEventListener("click",function(){
    link.classList.toggle("showlink");
})