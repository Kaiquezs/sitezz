var salada = document.getElementById("saladaVerde");
var batataFrita = document.getElementById("batataFrita");
var petiscos = document.getElementById("petiscos");
var bolinhoBacalhau = document.getElementById("bolinhoBacalhau");
var feijoada = document.getElementById("feijoada");
var fileParmegiana = document.getElementById("fileParmegiana");
var moquecaPeixe = document.getElementById("moquecaPeixe");
var frangoAssadoComErvas = document.getElementById("frangoAssadoComErvas");
var lasanhaBolonhesa = document.getElementById("lasanhaBolonhesa");
var macarronada = document.getElementById("macarronada");
var escondidinhoCarneSeca = document.getElementById("escondidinhoCarneSeca");
var brigadeiro = document.getElementById("brigadeiro");
var petitGateau = document.getElementById("petitGateau");
var pudimLeite = document.getElementById("pudimLeite");
var mousseMaracuja = document.getElementById("mousseMaracuja");
var tortaMorango = document.getElementById("tortaMorango");
var boloChocolate = document.getElementById("boloChocolate");
var sucoLimao = document.getElementById("sucoLimao");
var sucoLaranja = document.getElementById("sucoLaranja");
var sucoMaracuja = document.getElementById("sucoMaracuja");
var sucoGoiaba = document.getElementById("sucoGoiaba");
var sucoManga = document.getElementById("sucoManga");
var cerveja = document.getElementById("cerveja");
var whisky = document.getElementById("whisky");
var agua = document.getElementById("agua");
var cafeExpresso = document.getElementById("cafeExpresso");
var servicos = document.getElementById("servicos");
var entregador = true;
var valor = 0;

var confirmar = document.getElementById("confirmar");
var pedido = [];
var info = [];

function verificarCheckboxes() {
    var checkboxes = document.querySelectorAll('input[name="produto"]:checked');
    if (checkboxes.length > 0) {
        return true;
    }
    return false;
}

    function salvarInformacoes() {
if (verificarCheckboxes()) {
    calcularValor();
    this.localStorage.setItem('pedido', JSON.stringify(pedido));
    this.localStorage.setItem('total', JSON.stringify(this.valor));
    window.location.href = "cadastroLoginComDB-PROJETO-main/site-main/sites/pagConfirmar.html";
} else {
    alert('Por favor, selecione pelo menos um produto.');
}}


document.addEventListener("DOMContentLoaded", () => {
// Seleciona todos os botões de adicionar pedido
const addToOrderButtons = document.querySelectorAll(".add-to-order-btn");

addToOrderButtons.forEach(button => {
button.addEventListener("click", () => {
alert("Item adicionado pedido!");


});
});
});

function toggleOptions(optionsId, icon) {
const optionsDiv = document.getElementById(optionsId);
optionsDiv.classList.toggle('hidden');
if (optionsDiv.classList.contains('hidden')) {
icon.setAttribute('aria-expanded', 'false');
} else {
icon.setAttribute('aria-expanded', 'true');
}
}

function setInfo(nome){
    localStorage.setItem('nome', nome);
}

function setPedido(pedido){
    localStorage.setItem('pedido', pedido);
}

function getPedido(){
    return localStorage.getItem('pedido');
}

function getInfo(){
    return localStorage.getItem('nome');
}

this.localStorage.setItem("usuario", "kaique");
this.localStorage.setItem("endereco", "rua 779");
this.localStorage.setItem("telefone", "+557156792533");
this.localStorage.setItem("cargo", "entregador");

function calcularValor(valor){
    this.valor = 0;
    var verificar = localStorage.getItem("pedido");
    if(verificar !== null){
        for(n in pedido){
            pedido.splice(n);
        }
    }
    if(salada.checked){
        valor = 12;
        this.valor = valor;
        info = "Salada";
        pedido.push(info);
    }
    if(batataFrita.checked){
        valor = 10;
        this.valor += valor;
        info = "Batata frita";
        pedido.push(info);
    }
    if(petiscos.checked){
        valor = 52;
        this.valor += valor;
        info = "Petiscos";
        pedido.push(info);
    }
    if(bolinhoBacalhau.checked){
        valor = 12;
        this.valor += valor;
        info = "Bolinho de bacalhau";
        pedido.push(info);
    }
    if(feijoada.checked){
        valor = 35;
        this.valor += valor;
        info = "Feijoada";
        pedido.push(info);
    }
    if(fileParmegiana.checked){
        valor = 40;
        this.valor += valor;
        info = "Filé á parmegiana";
        pedido.push(info);
    }
    if(moquecaPeixe.checked){
        valor = 45;
        this.valor += valor;
        info = "Moqueca de peixe";
        pedido.push(info);
    }
    if(frangoAssadoComErvas.checked){
        valor = 30;
        this.valor += valor;
        info = "Frango assado com ervas";
        pedido.push(info);
    }
    if(lasanhaBolonhesa.checked){
        valor = 35;
        this.valor += valor;
        info = "Lasanha bolonhesa";
        pedido.push(info);
    }
    if(macarronada.checked){
        valor = 28;
        this.valor += valor;
        info = "Macarronada";
        pedido.push(info);
    }
    if(escondidinhoCarneSeca.checked){
        valor = 28;
        this.valor += valor;
        info = "Escondidinho de carne seca";
        pedido.push(info);
    }
    if(brigadeiro.checked){
        valor = 6;
        this.valor += valor;
        info = "Brigadeiro";
        pedido.push(info);
    }
    if(petitGateau.checked){
        valor = 18;
        this.valor += valor;
        info = "Petit Gateau";
        pedido.push(info);
    }
    if(pudimLeite.checked){
        valor = 12;
        this.valor += valor;
        info = "Pudim de leite";
        pedido.push(info);
    }
    if(mousseMaracuja.checked){
        valor = 10;
        this.valor += valor;
        info = "Mousse de maracujá";
        pedido.push(info);
    }
    if(tortaMorango.checked){
        valor = 15;
        this.valor += valor;
        info = "Torta de morango";
        pedido.push(info);
    }
    if(boloChocolate.checked){
        valor = 10;
        this.valor += valor;
        info = "Bolo de chocolate";
        pedido.push(info);
    }
    if(sucoLimao.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de limão";
        pedido.push(info);
    }
    if(sucoLaranja.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de laranja";
        pedido.push(info);
    }
    if(sucoMaracuja.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de maracujá";
        pedido.push(info);
    }
    if(sucoGoiaba.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de goiaba";
        pedido.push(info);
    }
    if(sucoManga.checked){
        valor = 5;
        this.valor += valor;
        info = "Suco de manga";
        pedido.push(info);
    }
    if(cerveja.checked){
        valor = 10;
        this.valor += valor;
        info = "Cerveja";
        pedido.push(info);
    }
    if(whisky.checked){
        valor = 20;
        this.valor += valor;
        info = "Whisky";
        pedido.push(info);
    }
    if(agua.checked){
        valor = 3;
        this.valor += valor;
        info = "Água";
        pedido.push(info);
    }
    if(cafeExpresso.checked){
        valor = 3;
        this.valor += valor;
        info = "Café expresso";
        pedido.push(info);
    }
}

servicos.onclick = function(){
    if(entregador){
        window.location.href = "cadastroLoginComDB-PROJETO-main/site-main/sites/visualizarPedidos.html";
    }
}
