document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const nextButton = document.getElementById('nextButton');
    const skipGifButton = document.getElementById('skipGifButton');
    const radioScreen = document.getElementById('radioScreen');
    const radioAudio = document.getElementById('radioAudio');
    const gifContainer = document.getElementById('gifContainer');

    const playlist = [
                
        'musica/Imagine Dragons - Demons (Lyrics)_MA0aCUxItYA.mp3',
        'musica/Sad Girl.mp3',
        'musica/Grimes - Shinigami Eyes (Official Video)_pzPElFdxMCM.mp3',
        // Adicione quantas músicas você desejar
    ];
    let currentSongIndex = 0;

    const gifs = [    
        'imagens/dnce.gif',
        'imagens/cat-jam.gif',
        'imagens/cool-fun.gif',
        'imagens/icegif-365.gif',
        'imagens/Y8nx.gif',

        // Adicione quantos gifs você desejar
    ];
    let currentGifIndex = 0;

    function getRandomGif() {
        return gifs[currentGifIndex];
    }

    function addRandomGifToContainer() {
        const gifUrl = getRandomGif();
        const imgElement = document.createElement('img');
        imgElement.src = gifUrl;
        imgElement.classList.add('gif');
        gifContainer.innerHTML = ''; // Limpa o container antes de adicionar um novo gif
        gifContainer.appendChild(imgElement);
    }

    playButton.addEventListener('click', function() {
        radioScreen.classList.remove('hidden');
        radioAudio.src = playlist[currentSongIndex];
        radioAudio.play();
        startGifAnimation();
        addRandomGifToContainer();
    });

    nextButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        radioAudio.src = playlist[currentSongIndex];
        radioAudio.play();
    });

    skipGifButton.addEventListener('click', function() {
        currentGifIndex = (currentGifIndex + 1) % gifs.length;
        addRandomGifToContainer();
    });

    radioAudio.addEventListener('ended', function() {
        stopGifAnimation();
        addRandomGifToContainer();
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        radioAudio.src = playlist[currentSongIndex];
        radioAudio.play();
    });

    function startGifAnimation() {
        // Adicione qualquer lógica adicional para a animação dos gifs, se necessário
    }

    function stopGifAnimation() {
        // Adicione qualquer lógica adicional para parar a animação dos gifs, se necessário
    }
});
