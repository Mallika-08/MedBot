const dropArea = document.getElementById("box");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);
function uploadImage(){
    inputFile.files[0];
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.style.backgroundSize = "contain";
    imageView.style.backgroundRepeat = "no-repeat";
}