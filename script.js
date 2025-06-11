let indice = 0;
const fotos = document.querySelectorAll('.foto');

function mostrarFoto(indiceAtual) {
  fotos.forEach((foto, i) => {
    foto.classList.toggle('ativa', i === indiceAtual);
  });
}

mostrarFoto(indice);

setInterval(() => {
  indice = (indice + 1) % fotos.length;
  mostrarFoto(indice);
}, 2000);
window.addEventListener('DOMContentLoaded', () => {
      const musica = document.getElementById('musica');
      const playButton = document.getElementById('playButton');

      musica.play().catch(() => {
        // Se o autoplay falhar, mostra o botão
        playButton.style.display = 'block';

        // Quando o botão for clicado, toca a música e esconde o botão
        playButton.addEventListener('click', () => {
          musica.play();
          playButton.style.display = 'none';
        });
      });
    });
function criarCoracao() {
  const container = document.querySelector('.hearts-container');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.backgroundColor = ['#ff6b81', '#ff9a9e', '#f8bbd0'][Math.floor(Math.random() * 3)];
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(criarCoracao, 500);
