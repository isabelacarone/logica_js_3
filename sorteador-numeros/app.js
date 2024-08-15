function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value); // recebe o id que nós queremos usar 
    let de = parseInt(document.getElementById('de').value); // forçando a ser um número inteiro 
    let ate = parseInt(document.getElementById('ate').value);  

    // alert('Quantidade: ${quantidade}');
    // alert('Do número: ${de}');
    // alert('Até o número: ${ate}');

    // let numero = obterNumeroAleatorio(de, ate);
    // alert(numero);

    let sorteados = []; // criando um array e criando um loop for para repetir um bloco de código enquanto uma condição é verdadeira 
    let numero;

    for (let i = 0; i < quantidade; i++) { //  colocamos i por padrão para comçecar com zero, e enquanto ela for menor que a qunatidade que a pessoa colocou, e depois adiciona 1
        numero = obterNumeroAleatorio(de, ate);


        while (sorteados.includes(numero)) {  // lógica para não repetir os números dentro do array  sorteados
            numero = obterNumeroAleatorio(de, ate);


        } // includes devolve bool (true or false)

        sorteados.push(numero); 
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
    alterarStatusBotao();

}


function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random () * (max - min + 1))  + min; // gerar o número aleatório

}

function alterarStatusBotao (){ 
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '' ;
    document.getElementById('de').value = '' ;
    document.getElementById('ate').value = '' ; 
    document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>' ; 
    alterarStatusBotao();
}