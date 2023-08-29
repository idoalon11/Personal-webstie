"use strict";
//create some vars for the code
let id = 0;
let imgForZoomOut;
let isRunning = false;
let originalWidth;
let originalHeight;
let imageOfStudent = document.getElementById("student");
let imageOfSmoke = document.getElementById("smoke");
let imageOfTrip = document.getElementById("trip");
let imageOfTeam = document.getElementById("team");
//zoom in function that will increase the picture's size for 3 seconds
function zoomIn(img) {
    //check if some other picture is now in zoom in
    if(isRunning){
        return;
    }
    //save the image
    originalWidth = img.style.width;
    originalHeight = img.style.height;
    isRunning = true;
    imgForZoomOut = img;
    //check specific images that fit to other sizes
    if(img === imageOfStudent || img === imageOfSmoke || img === imageOfTrip || img === imageOfTeam){
        //change the size
        img.style.width = "450px";
        img.style.height = "500px";
    }else {
        //change the size
        img.style.width = "500px";
        img.style.height = "400px";
    }
    //set interval for 3 sec and save the id for the zoom out
    id = setInterval(zoomOut, 3000);
}
function zoomOut() {
    //change the size back to original
    imgForZoomOut.style.width = originalWidth;
    imgForZoomOut.style.height= originalHeight;
    //clear the interval
    clearInterval(id);
    isRunning = false;
}
//add all events listener for images
document.getElementById("basket").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("code").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("student").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("shopify").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("footvolley").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("smoke").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("trip").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("anotherBasket").addEventListener('click',function() {
    zoomIn(this);
})
document.getElementById("team").addEventListener('click',function() {
    zoomIn(this);
})

