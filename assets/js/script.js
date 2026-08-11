const containerLinguagens = document.getElementById('linguagensContainer');
const botaoLinguagens = document.getElementById('dropdownBtn');
const menuLinguagens = document.getElementById('linguagensMenu');
let linguagemEsc = "port";

botaoLinguagens.addEventListener('click', (e) => {
  e.stopPropagation();
  menuLinguagens.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!containerLinguagens.contains(e.target)) {
    menuLinguagens.classList.remove('show');
  }
});

function alterarLinguagem(lingua){
    linguagemEsc = lingua;
    atualizarLinguagem()
}

function atualizarLinguagem(){
    switch (linguagemEsc) {
        case "port":
            document.getElementById('sobreTexto').innerHTML = "oi"
            break;
    
        case "eng":
            document.getElementById('sobreTexto').innerHTML = "hi"
            break;
    }
}
