const word = kawaii; // palavra a ser adivinhada
let guessedWord = "";
let remainigAttemts = 6;

//inicilização da palavra a ser adivinhada com traços
for (let i = 0; i < word.length; i++) {
    guessedWord += "-";
}

document.getElementById("word-display").textContent = guessedWord;

// função da letra a ser adivinhada 
function checkGuess() {
    const guess = document.getElementById("guess-input");.value.toUpperCase();
    document.getElementById("guess-input").value = ""; // limpar a caixa

    if (word.includes(guess)) {
        // Substituir traços por letras corretas
        for (let i = 0; i < word.length; i++) {
          if (word[i] === guess) {
            guessedWord = guessedWord.substr(0, i) + guess + guessedWord.substr(i + 1);
          }
        }
        document.getElementById("word-display").textContent = guessedWord;
        document.getElementById("feedback").textContent = "Letra correta!";
      } else {
        remainingAttempts--;
        document.getElementById("feedback").textContent = "Letra incorreta! Tente novamente. Tentativas restantes: " + remainingAttempts;
        if (remainingAttempts === 0) {
          document.getElementById("feedback").textContent = "Suas tentativas acabaram. A palavra era: " + word;
          document.getElementById("guess-input").disabled = true;
        }
      }
    
      // Verificar se a palavra foi totalmente adivinhada
      if (guessedWord === word) {
        document.getElementById("feedback").textContent = "Parabéns! Você adivinhou a palavra!";
        document.getElementById("guess-input").disabled = true;
      }
    }