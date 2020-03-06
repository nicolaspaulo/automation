/* global Given, Then, When */

import PageObjects from '../PageObjects/PageObjects'

const pageObjects = new PageObjects; 

Given('que o usuário esteja na tela de compras do site', () => {
    pageObjects.entrarSite();
})

When('acionar o botão de adicionar ao carrinho', () => {
    pageObjects.buscaProduto();
    pageObjects.selecionaProduto();
    pageObjects.comprarProduto();
})

Then('deverá ser aberta uma mensagem para finalizar compra', () => {
    pageObjects.finalizarCompra();
})

And('tenha finalizado uma compra selecionando realizar novo cadastro', () => {
    pageObjects.novoCadastro();
})

Then('deverá ser apresentado os campos pessoais para preenchimento', () => {
    pageObjects.camposNovoCadastro();
})

When('preencher um campo com informações inválidas', () => {
    pageObjects.invalidoCPF();
})

Then('o campo deverá sinalizar com um aviso de campo inválido', () => {
    pageObjects.validaCampo();
    pageObjects.criarCadastro();
})

When('finalizar o cadastro, a tela de informações de entrega será apresentada', () => {
    pageObjects.telaCep();
})

Then('o meio de pagamento deverá ser apresentado, escolha a opção desejada', () => {
    pageObjects.selecionaBoleto();
})

And('ao finalizar o pagamento, o número do pedido gerado', () => {
    pageObjects.confirmacaoPedido();
})
