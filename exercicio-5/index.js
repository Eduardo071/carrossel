const setaDireita = document.querySelector(".seta-direita");

const setaEsquerda = document.querySelector(".seta-esquerda");

let slides = document.querySelectorAll(".slider");


let imagemAtual = 0;

setaDireita.addEventListener("click", function () {
    esconderImagemAberta();

    imagemAtual++;

    slides[imagemAtual].classList.add("mostrar");

});

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}


