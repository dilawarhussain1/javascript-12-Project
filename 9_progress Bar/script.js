var i =0;

function maove(){
    if(i==0){
        i=1;
        var html=document.getElementById("html");
        var css=document.getElementById("css");
        var js=document.getElementById("js");
        var php=document.getElementById("php");




        var width=1;

        var id = setInterval(frame,10);

        function frame(){
            if(width >= 100){
                clearInterval(id);
                i=0;
            }else{
                width++;
                html.style.width="75%";
                css.style.width="90%";
                js.style.width="80%";
                php.style.width="75%";



            }
        }
    }    
}
maove();