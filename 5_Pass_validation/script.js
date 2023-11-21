const password_1=document.querySelector("#password_1");
const password_2=document.querySelector("#password_2");
const errorText=document.querySelector(".error-text");
const showBtn=document.querySelector(".show");
const btn=document.querySelector("button");

function active(){
    if(password_1.value.length >= 6){
        btn.removeAttribute("disabled","");
        btn.classList.add("active");
        password_2.removeAttribute("disabled","")
    }
    else{
        btn.setAttribute("disabled","");
        btn.classList.remove("active");
        password_2.setAttribute("disabled","")
    }
}
function active_2(){
    if(password_2.value !=""){
        showBtn.style.display = "block";

    showBtn.addEventListener("click",function(){
        if((password_1.type == "password")&& (password_2.type == "password")){
            password_1.type = "text";
            this.textContent= "hide";
            this.classList.add("active");
        }else{
            password_1.type = "password";
            this.textContent= "Show";
            this.classList.remove("active");
        }
    })
    }else{
        showBtn.style.display= "none";

    }


}

btn.addEventListener("click",function(){
    if(password_1.value != password_2.value){
        errorText.style.display= "block";
        errorText.textContent = "Error ! Password not match"
        errorText.classList.remove ("matched");
    }else{
        errorText.style.display= "block";
        errorText.textContent = "GOOD Password match"
        errorText.classList.add ("matched");
    }
})