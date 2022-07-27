let contadorCaixa = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let pratoSelecionado = '';
let bebidaSelecionada = '';
let sobremesaSelecionada = '';

function selecionarCaixaPrato(menuCaixa, valor, prato) {
    precoPrato = valor;
    pratoSelecionado = prato;
    const menuCaixaSelecionado = document.querySelector(".selecionado-prato");
    if (menuCaixaSelecionado !== null) {
        menuCaixaSelecionado.classList.remove("selecionado-prato");
        contadorCaixa--;
    }
    menuCaixa.classList.add("selecionado-prato");
    contadorCaixa++;
    botaoPedido();
}

function selecionarIconePrato(menuIcone) {
    const menuIconeSelecionado = document.querySelector(".menu-icone-prato");
    if (menuIconeSelecionado !== null) {
        menuIconeSelecionado.classList.remove("menu-icone-prato");
    }
    menuIcone.classList.add("menu-icone-prato");
}

function selecionarCaixaBebida(menuCaixa, valor, bebida) {
    precoBebida = valor;
    bebidaSelecionada = bebida;
    const menuCaixaSelecionado = document.querySelector(".selecionado-bebida");
    if (menuCaixaSelecionado !== null) {
        menuCaixaSelecionado.classList.remove("selecionado-bebida");
        contadorCaixa--;
    }
    menuCaixa.classList.add("selecionado-bebida");
    contadorCaixa++;
    botaoPedido();
}

function selecionarIconeBebida(menuIcone) {
    const menuIconeSelecionado = document.querySelector(".menu-icone-bebida");
    if (menuIconeSelecionado !== null) {
        menuIconeSelecionado.classList.remove("menu-icone-bebida");
    }
    menuIcone.classList.add("menu-icone-bebida");
}

function selecionarCaixaSobremesa(menuCaixa, valor, sobremesa) {
    precoSobremesa = valor;
    sobremesaSelecionada = sobremesa;
    const menuCaixaSelecionado = document.querySelector(".selecionado-sobremesa");
    if (menuCaixaSelecionado !== null) {
        menuCaixaSelecionado.classList.remove("selecionado-sobremesa");
        contadorCaixa--;
    }
    menuCaixa.classList.add("selecionado-sobremesa");
    contadorCaixa++;
    botaoPedido();
}

function selecionarIconeSobremesa(menuIcone) {
    const menuIconeSelecionado = document.querySelector(".menu-icone-sobremesa");
    if (menuIconeSelecionado !== null) {
        menuIconeSelecionado.classList.remove("menu-icone-sobremesa");
    }
    menuIcone.classList.add("menu-icone-sobremesa");
}

function botaoPedido() {
    const botaoSelecionado = document.querySelector(".rodape-botao");
    if (contadorCaixa === 3) {
        botaoSelecionado.classList.add("rodape-selecionado");
        botaoSelecionado.innerHTML = '<div onclick="fecharPedido();">Fechar pedido</div>';
    }
}

function fecharPedido() {
    let precoTotal = precoPrato + precoBebida + precoSobremesa;
    let mensagem = `Olá, gostaria de fazer o pedido: \n\ - Prato: ${pratoSelecionado} \n\ - Bebida: ${bebidaSelecionada} \n\ - Sobremesa: ${sobremesaSelecionada} \n\ Total: R$ ${precoTotal.toFixed(2)}`;
    pedidoLink = "https://wa.me/55219xxxxxxxx?text=" + encodeURIComponent(mensagem);
    window.open(pedidoLink);
}