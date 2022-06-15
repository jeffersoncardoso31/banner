

let time = 2000;
let imagemSelecionada = 0;
let imagens = document.querySelectorAll("#banner img");
let max = imagens.length;


function nextImage(){
    imagens[imagemSelecionada].classList.remove("selected");

    imagemSelecionada ++;

    if(imagemSelecionada >= max){
        imagemSelecionada = 0;
    }
        
    imagens[imagemSelecionada].classList.add("selected");
}

    function start(){
        setInterval(nextImage, time);
    }

window.addEventListener("load", start);