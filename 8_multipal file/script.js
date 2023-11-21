
function previewImage(){
    var preview = document.querySelector("#preview");
    if(this.files){
        [].forEach.call(this.files, readAndPrReview);
    
    function readAndPrReview(file){
        if(!/\.(jpe?g|svg|gif)$/i.test(file.name)){
            return alert(file.name + "is not img file");
        }

        var reader = new FileReader();
        reader.addEventListener("load",function(){
            var image = new Image();
            image.title = file.name;
            image.src= this.result;
            preview.appendChild(image);
        })

        reader.readAsDataURL(file);
    }
    
    }
}





document.querySelector("#file-input").addEventListener("change" ,previewImage);