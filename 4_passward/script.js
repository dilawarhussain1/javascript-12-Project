const passFild = document.querySelector(".pass");
const ShowBtn = document.querySelector("span i");

ShowBtn.addEventListener("click",function(){
    if(passFild.type==="password"){
        passFild.type="text";
        ShowBtn.classList.add("hide-btn");
    }else{
        passFild.type="password";
        ShowBtn.classList.remove("hide-btn"); 
    }
})
