function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const buttonAlert = document.getElementById("btn-confirmar");

        buttonAlert.onclick = async function() {
            alert("Seu pedido foi Confirmado!");
            window.location.href = "../../index.html";
        };

    var texto = document.getElementById("nome");
    var textoPedido = document.getElementById("pedido");
    var textoTotal = document.getElementById("total");
    var nome = localStorage.getItem('nome');
    const pedidos = JSON.parse(localStorage.getItem('pedido'))
    var total = JSON.parse(localStorage.getItem("total"));
    var cargo = this.localStorage.getItem("cargo");
    var array = [];
    textoPedido.innerHTML = "<strong>Pedido: </strong>"+pedidos;
    textoTotal.innerHTML = "<strong>Total a pagar: </strong>"+total;
    texto.innerHTML = "<strong>Nome</strong>: "+nome;

    //window.addEventListener("beforeunload")
    window.addEventListener("beforeunload", function (event) {

        if(cargo != "entregador"){    
            this.localStorage.removeItem("usuario");
            this.localStorage.removeItem("pedido");
            this.localStorage.removeItem("total");
            this.localStorage.removeItem("endereco");
            this.localStorage.removeItem("telefone");
        } else {

        }
    });
    window.addEventListener("")
