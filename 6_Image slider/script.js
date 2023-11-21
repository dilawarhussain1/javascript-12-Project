 var sliderIndex=0;

shoSliders();

function plusslide(n){
    shoSliders(sliderIndex +n)
}
function minusslide(n){
    shoSliders(sliderIndex +n)
}

function shoSliders(){
    var slider = document.getElementsByClassName("myslider");
    var dotes = document.getElementsByClassName("dot");

    for( i=0; i<slider.length; i++){
        slider[i].style.display="none";
    }
    sliderIndex++;
    if(sliderIndex > slider.length){
        sliderIndex=1;
    }

    for(i=0; i< dotes.length; i++){
        dotes[i].className =dotes[i].className.replace("active","");
    }
    slider[sliderIndex-1].style.display="block";
    dotes[sliderIndex-1].className+="active";

    setTimeout(shoSliders,1000);
}