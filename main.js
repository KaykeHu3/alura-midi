function tocarSom (idAudio){
   const elemento = document.querySelector(idAudio);

   if (elemento && elemento.localName === 'audio') {
        elemento.play();
   }
   else {
        alert('Elemento não encontrado');
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idTagAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idTagAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            listaDeTeclas[contador].classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        listaDeTeclas[contador].classList.remove('ativa');
    }
}
