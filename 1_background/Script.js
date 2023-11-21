const colors = ["red","green","rgba(133,122,200)","#f15025","blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const box =document.querySelector("#box");

btn.addEventListener("click", function(){
  const randomNumber =getRandomNumber();
   
  box.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; 
})


function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}