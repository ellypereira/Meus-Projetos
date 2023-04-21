'use strict';

const images = [
     { 'id' : '1' , 'url' :'./img/download.jpg' },
     { 'id' : '2' , 'url' :'./img/attack.jpg' },
     { 'id' : '3' , 'url' :'./img/Killing Stalking.jpg' },
     { 'id' : '4' , 'url' :'./img/Wonder Egg Priority.png' },
     { 'id' : '5' , 'url' :'./img/Your Name.jpg' },
     { 'id' : '6' , 'url' :'./img/Koe no katachi.jpg' },
]

const container = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
         <div class='item'>
             <img src='${image.url}'
         </div>
         
         `
        });

}

loadImages(images, container);