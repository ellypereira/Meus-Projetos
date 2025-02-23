function sendMessage() {
    var userInput = document.getElementById('user-text').value;
    var botMsg = document.getElementById('bot-msg');

    if (userInput.toLowerCase().includes('hora') || userInput.toLowerCase().includes('dia')) {
        var date = new Date();
        botMsg.innerHTML = 'A hora atual é ' + date.toLocaleTimeString() + ', e a data é ' + date.toLocaleDateString() + '.';
    } else if (userInput.toLowerCase().includes('bom dia')) {
        botMsg.innerHTML = 'Olá! Bom dia!';
    } else if (userInput.toLowerCase().includes('boa tarde')) {
        botMsg.innerHTML = 'Olá! Boa tarde!';
    } else if (userInput.toLowerCase().includes('boa noite')) {
        botMsg.innerHTML = 'Olá! Boa noite!';
    } else if (userInput.toLowerCase().includes('poema')) {
        var poemas = [
            "O amor é fogo que arde sem se ver...",
            "Viver não é necessário; o que é necessário é criar.",
            "Tenho em mim todos os sonhos do mundo."
        ];
        var randomPoem = poemas[Math.floor(Math.random() * poemas.length)];
        botMsg.innerHTML = 'Aqui está um poema famoso para você: <br>' + randomPoem;
    } else {
        botMsg.innerHTML = 'Desculpe, não entendi.';
    }
}
