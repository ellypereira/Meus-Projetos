let contador = 0;
let btnSoma = document.getElementById('somar');
let btnSubtrair = document.getElementById('subtrair');
let resultado = document.getElementById('resultado');

btnSoma.addEventListener('click', function(){

    console.log("Cliquei no btnSoma.");

    contador++;

    resultado.innerHTML = contador;

});

btnSubtrair.addEventListener('click', function(){

    contador--;

    resultado.innerHTML = contador;
});