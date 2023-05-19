function createShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    
    // Defina o estilo do seu elemento
    const size = Math.random() * 60 + 40 + 'px';
    shape.style.width = size;
    shape.style.height = size;
    shape.style.borderRadius = '50%';
    shape.style.backgroundColor = getRandomColor();
    
    // Defina a posição inicial do elemento
    const { clientWidth, clientHeight } = document.documentElement;
    const x = Math.random() * clientWidth;
    const y = Math.random() * clientHeight;
    shape.style.transform = `translate(${x}px, ${y}px)`;
    
    // Adicione o elemento ao fundo
    document.getElementById('background').appendChild(shape);
    
    // Inicia a animação do elemento
    animateShape(shape);
  }
  
  // Animação dos elementos
  function animateShape(shape) {
    const { clientWidth, clientHeight } = document.documentElement;
    const x = Math.random() * clientWidth;
    const y = Math.random() * clientHeight;
    const duration = Math.random() * 3000 + 2000; // Define a duração da animação
    
    shape.style.transition = `transform ${duration}ms linear`;
    shape.style.transform = `translate(${x}px, ${y}px)`;
    
    // Remove o elemento após a animação
    setTimeout(() => {
      shape.remove();
    }, duration);
  }
  
  // Função auxiliar para obter uma cor aleatória em formato hexadecimal
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  setInterval(createShape, 1000);