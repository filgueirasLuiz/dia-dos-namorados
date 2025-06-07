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
