const headerBg = document.getElementById("header-bg")
const linkInfo = document.getElementById("link-info")
const linkGaleria = document.getElementById("link-galeria")
const linkCuriosidades = document.getElementById("link-curiosidades")
const btnMudar = document.getElementById("btn-mudar")
const sec1Bg = document.getElementById("sec-1-bg")
const sec1Titulo = document.getElementById("sec-1-titulo")
const tituloHistoria = document.getElementById("titulo-historia")
const tituloCultura = document.getElementById("titulo-cultura")
const tituloTecnologia = document.getElementById("titulo-tecnologia")
const tituloGaleria = document.getElementById("titulo-galeria")
const curiosidadesBg = document.getElementById("curiosidades-bg")
const tituloCuriosidades = document.getElementById("titulo-curiosidades")
const cardIlhas = document.getElementById("card-ilhas")
const cardTrens = document.getElementById("card-trens")
const cardFlor = document.getElementById("card-flor")
const cardBarulho = document.getElementById("card-barulho")
const cardTecnologia = document.getElementById("card-tecnologia")
const cardTemplos = document.getElementById("card-templos")
const tituloIlhas = document.getElementById("titulo-ilhas")
const tituloTrens = document.getElementById("titulo-trens")
const tituloFlor = document.getElementById("titulo-flor")
const tituloBarulho = document.getElementById("titulo-barulho")
const tituloTecnologiaCard = document.getElementById("titulo-tecnologia-card")
const tituloTemplos = document.getElementById("titulo-templos")
const footerBg = document.getElementById("footer-bg")
const footerTexto = document.getElementById("footer-texto")

const t1 = document.getElementById("t1")
const t2 = document.getElementById("t2")
const t3 = document.getElementById("t3")
const t4 = document.getElementById("t4")
const t5 = document.getElementById("t5")
const t6 = document.getElementById("t6")
const t7 = document.getElementById("t7")
const t8 = document.getElementById("t8")
const t9 = document.getElementById("t9")

const img11 = document.getElementById("img11")
const img12 = document.getElementById("img12")
const img21 = document.getElementById("img21")
const img22 = document.getElementById("img22")
const img31 = document.getElementById("img31")
const img32 = document.getElementById("img32")
const img41 = document.getElementById("img41")
const img42 = document.getElementById("img42")
const img51 = document.getElementById("img51")
const img52 = document.getElementById("img52")

function alterarCor(){
    //Mudar azul-forte-bg



    headerBg.classList.toggle("vermelho2-fraco-bg")
    curiosidadesBg.classList.toggle("vermelho2-fraco-bg")
    footerBg.classList.toggle("vermelho2-fraco-bg")


    //mudar azul-forte-fonte

    linkInfo.classList.toggle("vermelho2-forte-fonte")
    linkGaleria.classList.toggle("vermelho2-forte-fonte")
    linkCuriosidades.classList.toggle("vermelho2-forte-fonte")
    sec1Titulo.classList.toggle("vermelho2-forte-fonte")
    tituloGaleria.classList.toggle("vermelho2-forte-fonte")
    tituloCuriosidades.classList.toggle("vermelho2-forte-fonte")

    //mudar azul-fraco-bg

    sec1Bg.classList.toggle("bege-fraco-bg")
    cardIlhas.classList.toggle("bege-fraco-bg")
    cardTrens.classList.toggle("bege-fraco-bg")
    cardFlor.classList.toggle("bege-fraco-bg")
    cardBarulho.classList.toggle("bege-fraco-bg")
    cardTecnologia.classList.toggle("bege-fraco-bg")
    cardTemplos.classList.toggle("bege-fraco-bg")

    //mudar vermelho-fonte

    tituloHistoria.classList.toggle("ciano-fonte")
    tituloCultura.classList.toggle("ciano-fonte")
    tituloTecnologia.classList.toggle("ciano-fonte")
    tituloIlhas.classList.toggle("ciano-fonte")
    tituloTrens.classList.toggle("ciano-fonte")
    tituloFlor.classList.toggle("ciano-fonte")
    tituloBarulho.classList.toggle("ciano-fonte")
    tituloTecnologiaCard.classList.toggle("ciano-fonte")
    tituloTemplos.classList.toggle("ciano-fonte")
}

function aumentarFonte(){
    sec1Titulo.style.fontSize = (parseInt(getComputedStyle(sec1Titulo).fontSize) + 2) + "px"
    tituloHistoria.style.fontSize = (parseInt(getComputedStyle(tituloHistoria).fontSize) + 2) + "px"
    tituloCultura.style.fontSize = (parseInt(getComputedStyle(tituloCultura).fontSize) + 2) + "px"
    tituloTecnologia.style.fontSize = (parseInt(getComputedStyle(tituloTecnologia).fontSize) + 2) + "px"
    tituloGaleria.style.fontSize = (parseInt(getComputedStyle(tituloGaleria).fontSize) + 2) + "px"
    tituloCuriosidades.style.fontSize = (parseInt(getComputedStyle(tituloCuriosidades).fontSize) + 2) + "px"
    tituloIlhas.style.fontSize = (parseInt(getComputedStyle(tituloIlhas).fontSize) + 2) + "px"
    tituloTrens.style.fontSize = (parseInt(getComputedStyle(tituloTrens).fontSize) + 2) + "px"
    tituloFlor.style.fontSize = (parseInt(getComputedStyle(tituloFlor).fontSize) + 2) + "px"
    tituloBarulho.style.fontSize = (parseInt(getComputedStyle(tituloBarulho).fontSize) + 2) + "px"
    tituloTecnologiaCard.style.fontSize = (parseInt(getComputedStyle(tituloTecnologiaCard).fontSize) + 2) + "px"
    tituloTemplos.style.fontSize = (parseInt(getComputedStyle(tituloTemplos).fontSize) + 2) + "px"
    t1.style.fontSize = (parseInt(getComputedStyle(t1).fontSize) + 2) + "px"
    t2.style.fontSize = (parseInt(getComputedStyle(t2).fontSize) + 2) + "px"
    t3.style.fontSize = (parseInt(getComputedStyle(t3).fontSize) + 2) + "px"
    t4.style.fontSize = (parseInt(getComputedStyle(t4).fontSize) + 2) + "px"
    t5.style.fontSize = (parseInt(getComputedStyle(t5).fontSize) + 2) + "px"
    t6.style.fontSize = (parseInt(getComputedStyle(t6).fontSize) + 2) + "px"
    t7.style.fontSize = (parseInt(getComputedStyle(t7).fontSize) + 2) + "px"
    t8.style.fontSize = (parseInt(getComputedStyle(t8).fontSize) + 2) + "px"
    t9.style.fontSize = (parseInt(getComputedStyle(t9).fontSize) + 2) + "px"
}

function diminuirFonte(){
    sec1Titulo.style.fontSize = (parseInt(getComputedStyle(sec1Titulo).fontSize) - 2) + "px"
    tituloHistoria.style.fontSize = (parseInt(getComputedStyle(tituloHistoria).fontSize) - 2) + "px"
    tituloCultura.style.fontSize = (parseInt(getComputedStyle(tituloCultura).fontSize) - 2) + "px"
    tituloTecnologia.style.fontSize = (parseInt(getComputedStyle(tituloTecnologia).fontSize) - 2) + "px"
    tituloGaleria.style.fontSize = (parseInt(getComputedStyle(tituloGaleria).fontSize) - 2) + "px"
    tituloCuriosidades.style.fontSize = (parseInt(getComputedStyle(tituloCuriosidades).fontSize) - 2) + "px"
    tituloIlhas.style.fontSize = (parseInt(getComputedStyle(tituloIlhas).fontSize) - 2) + "px"
    tituloTrens.style.fontSize = (parseInt(getComputedStyle(tituloTrens).fontSize) - 2) + "px"
    tituloFlor.style.fontSize = (parseInt(getComputedStyle(tituloFlor).fontSize) - 2) + "px"
    tituloBarulho.style.fontSize = (parseInt(getComputedStyle(tituloBarulho).fontSize) - 2) + "px"
    tituloTecnologiaCard.style.fontSize = (parseInt(getComputedStyle(tituloTecnologiaCard).fontSize) - 2) + "px"
    tituloTemplos.style.fontSize = (parseInt(getComputedStyle(tituloTemplos).fontSize) - 2) + "px"
    t1.style.fontSize = (parseInt(getComputedStyle(t1).fontSize) - 2) + "px"
    t2.style.fontSize = (parseInt(getComputedStyle(t2).fontSize) - 2) + "px"
    t3.style.fontSize = (parseInt(getComputedStyle(t3).fontSize) - 2) + "px"
    t4.style.fontSize = (parseInt(getComputedStyle(t4).fontSize) - 2) + "px"
    t5.style.fontSize = (parseInt(getComputedStyle(t5).fontSize) - 2) + "px"
    t6.style.fontSize = (parseInt(getComputedStyle(t6).fontSize) - 2) + "px"
    t7.style.fontSize = (parseInt(getComputedStyle(t7).fontSize) - 2) + "px"
    t8.style.fontSize = (parseInt(getComputedStyle(t8).fontSize) - 2) + "px"
    t9.style.fontSize = (parseInt(getComputedStyle(t9).fontSize) - 2) + "px"
}

function img1(){
    if (img11.classList.contains("d-none")){
        img11.classList.remove("d-none")
        img12.classList.add("d-none")
    }else{
        img11.classList.add("d-none")
        img12.classList.remove("d-none")
    }
}

function img2(){
    if (img21.classList.contains("d-none")){
        img21.classList.remove("d-none")
        img22.classList.add("d-none")
    }else{
        img21.classList.add("d-none")
        img22.classList.remove("d-none")
    }
}

function img3(){
    if (img31.classList.contains("d-none")){
        img31.classList.remove("d-none")
        img32.classList.add("d-none")
    }else{
        img31.classList.add("d-none")
        img32.classList.remove("d-none")
    }
}

function img4(){
    if (img41.classList.contains("d-none")){
        img41.classList.remove("d-none")
        img42.classList.add("d-none")
    }else{
        img41.classList.add("d-none")
        img42.classList.remove("d-none")
    }
}

function img5(){
    if (img51.classList.contains("d-none")){
        img51.classList.remove("d-none")
        img52.classList.add("d-none")
    }else{
        img51.classList.add("d-none")
        img52.classList.remove("d-none")
    }
}