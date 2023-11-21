function createFruits(){
    const fruits = document.createElement("div");
    fruits.classList.add("fruits");

    const foodItem =['🍏','🍍','🍇','🍈','🍑']
    fruits.style.left=Math.random() *100 + "vw";
    fruits.style.animationDuration = Math.random() *2 +3 +"s";

    fruits.innerHTML=foodItem[Math.floor(Math.random()* foodItem.length)]

    document.body.appendChild(fruits);
    setTimeout(()=>{
    fruits.remove();
    },5000)
}

setInterval(createFruits,300);
