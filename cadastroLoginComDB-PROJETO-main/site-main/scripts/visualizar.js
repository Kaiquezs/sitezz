var item = JSON.parse(localStorage.getItem("pedido"));
var texto = document.getElementById("texto");
var nome = document.getElementById("nome");
var textoEndereco = document.getElementById("endereco");
var textoTelefone = document.getElementById("telefone");

var usuario = localStorage.getItem("usuario");
var endereco = localStorage.getItem("endereco");
var telefone = localStorage.getItem("telefone");
nome.innerHTML = "<strong>Nome: </strong>"+usuario+".";
textoEndereco.innerHTML = "<strong>Endereço: </strong>"+endereco+".";
textoTelefone.innerHTML = "<strong>Telefone: </strong>"+telefone+".";
texto.innerHTML = "<strong>Pedido: </strong>"+item+".";
