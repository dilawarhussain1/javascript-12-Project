function loadFile(event){
    var output=document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0])

   output.onload = function(){
    console.log(URL.revokeObjectURL(output.src))
   }
}