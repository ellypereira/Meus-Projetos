document.addEventListener("DOMContentLoaded", function () {
    const backgroundImages = document.querySelector('.background-images');

    const images = ['abara.png', 'acarajé+vatapá.jpg', 'X Burguer Duplo.jpg']; // Adicione aqui mais imagens do cardápio

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        backgroundImages.appendChild(img);
    });
});
