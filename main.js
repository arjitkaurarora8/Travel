var arr = ["Pic__1.jpg", 'Pic__2.jpg', 'Pic__3.jpg', 'Pic__4.jpg', 'Pic__5.jpg'];

var image = document.getElementById('image');
var RdmNo;

function changeImage(image, arr) {
    'use strict';

    setInterval(() => {
        RdmNo = Math.floor(Math.random() * arr.length);
        image.src = arr[RdmNo];
        console.log(RdmNo);
    }, 3000);
}

changeImage(image, arr);