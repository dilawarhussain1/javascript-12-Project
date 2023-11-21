const text =" Hello I  am Dilawar Hussain I am a web Devolper";
let index=0;

function writeText(){
    document.getElementById("main").innerText=text.slice(0,index);
    index++;

    if(index >text.length){
        index=0;
    }
}
setInterval(writeText,100);
