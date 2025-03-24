const btn = document.getElementById('btnCortar');
const papelOriginal = document.getElementById('papelOriginal');
const papelPicado = document.getElementById('papelPicado');
const som = document.getElementById('corteSom');
const particlesContainer = document.querySelector('.particles');

btn.addEventListener('click', () => {
  reiniciarTudo();

  // Começar a animação do papel descendo
  papelOriginal.style.display = 'block';
  papelOriginal.style.top = '-250px';
  void papelOriginal.offsetWidth; // Força o reflow
  papelOriginal.style.animation = 'descer 1.5s ease-in forwards';

  // Cortar depois que o papel chegar na lâmina
  setTimeout(() => {
    som.currentTime = 0;
    som.play();
    papelOriginal.style.display = 'none';
    mostrarPapelPicado();
    criarParticulas();
  }, 1400);
});

function reiniciarTudo() {
  // Resetar papel original
  papelOriginal.style.display = 'none';
  papelOriginal.style.animation = 'none';
  papelOriginal.style.top = '-250px';

  // Resetar papel picado
  papelPicado.style.display = 'none';
  papelPicado.innerHTML = '';

  // Resetar partículas
  particlesContainer.innerHTML = '';
}

function mostrarPapelPicado() {
  papelPicado.style.display = 'block';
  papelPicado.innerHTML = '';

  const totalTiras = 20;
  for (let i = 0; i < totalTiras; i++) {
    const tira = document.createElement('div');
    tira.classList.add('tira');
    tira.style.left = `${i * 10}px`;
    tira.style.setProperty('--rot', `${Math.random() * 60 - 30}deg`);
    papelPicado.appendChild(tira);
  }
}

function criarParticulas() {
  particlesContainer.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const part = document.createElement('div');
    part.classList.add('particula');
    const x = `${Math.random() * 60 - 30}px`;
    const y = `${Math.random() * 80 - 20}px`;
    part.style.left = `${Math.random() * 200}px`;
    part.style.top = `${Math.random() * 20}px`;
    part.style.setProperty('--x', x);
    part.style.setProperty('--y', y);
    particlesContainer.appendChild(part);
    setTimeout(() => part.remove(), 1000);
  }
}
