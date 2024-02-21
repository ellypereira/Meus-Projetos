document.addEventListener("DOMContentLoaded", function() {
    createStars();
});

function createStars() {
    const starCount = 50; // Número de estrelas

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star"; // Adicionando a classe "star"
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        document.getElementById("stars").appendChild(star);
    }
}
