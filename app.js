let qrBox = document.getElementById("qrBox");
let qrImg = document.getElementById("qrImg");
let input = document.getElementById("input");

function generateQR(){
if(input.value.length >0){

    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    qrBox.classList.add("showImg");
}   
else{
    alert("please enter something!!");
}

}