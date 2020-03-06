import PageElements from '../../support/pageElements/PageElements'

const pageElements = new PageElements;

const url = Cypress.config("baseUrl")

class PageObjects {
    entrarSite() {
        cy.visit(url)
    }

    buscaProduto() {
        cy.get(pageElements.busca()).type('coador')
        .get(pageElements.buttonPesquisa()).click()
    }

    selecionaProduto() {
        cy.get(pageElements.gridProdutos()).should('be.visible')
        .get(pageElements.primeiroProduto()).click().wait(1000)
    }

    comprarProduto() {
        cy.get(pageElements.buttonComprar()).should('be.visible').click().wait(2000)
    }

    finalizarCompra() {
        cy.get(pageElements.total()).should('be.visible')
        .get(pageElements.buttonContinuar()).click()
        .get(pageElements.entrarOuCadastrar()).should('be.visible')
    }

    novoCadastro() {
        cy.get(pageElements.novoCadastro()).click()

    }

    camposNovoCadastro() {
        cy.get(pageElements.campoEmail()).type('teste@hotmail.com')
        .get(pageElements.campoSenha()).type('123456')
        .get(pageElements.campoCPF()).type(geracpf)
        .get(pageElements.campoNome()).type('Teste Nome')
        .get(pageElements.campoDataNascimento()).type('13/04/1990')
        .get(pageElements.campoSexo()).check()
        .get(pageElements.campoTelefone()).type('4430905869')
    }

    invalidoCPF() {
        cy.get(pageElements.campoCPF()).clear().type('09789678509')

    }

    validaCampo() {
        cy.get(pageElements.cpfInvalido()).should('have.text', 'Campo inválido');
    }

    criarCadastro() {
        cy.get(pageElements.buttonCriaCadastro()).click()
    }

    telaCep() {
        cy.get(pageElements.campoCep()).type('87113050')
        .get(pageElements.campoNumero()).type('980')
        .get(pageElements.campoReferencia()).type('Posto na esquina')
        .get(pageElements.buttonCriaCadastro()).should('have.text', ' Entregar neste endereço ').click()
    }

    selecionaBoleto() {
        cy.get(pageElements.boleto()).should('be.visible')
        .get(pageElements.buttonCriaCadastro()).should('have.text', ' selecione ').click()
    }

    gerarBolero() {
        cy.get(pageElements.buttonGeraBoleto()).click()

    }
    
    confirmacaoPedido() {
        cy.get('.overflow-hidden pull-left ng-scope').should('have.text', 'Confirmação de pedido enviada para:')
    }
}

export default PageObjects;

function gera_random(n) {
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

function mod(dividendo,divisor) {
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function geracpf() {
    var n = 9;
    var n1 = gera_random(n);
     var n2 = gera_random(n);
     var n3 = gera_random(n);
     var n4 = gera_random(n);
     var n5 = gera_random(n);
     var n6 = gera_random(n);
     var n7 = gera_random(n);
     var n8 = gera_random(n);
     var n9 = gera_random(n);
     var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
     d1 = 11 - (mod(d1,11));
     if (d1>=10) d1 = 0;
     var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
     d2 = 11 - (mod(d2,11));
     if (d2>=10) d2 = 0;

    if (document.form1.mascara.checked)
       return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
    else
      return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
}