Feature: Adicionar itens ao carrinho
    Como usuário do sistema
    Quero que seja psossível adicionar todos os itens desejados ao carrinho de compras
    Deforma que eu consiga me cadastrar no site e finalizar a compra posteriormente

        Context: 
        Given que o usuário esteja na tela de compras do site

            Scenario: Adicionando itens
                When acionar o botão de adicionar ao carrinho
                Then deverá ser aberta uma mensagem para finalizar compra

            Scenario: Realizar Cadastro Finalizar Compra
                And tenha finalizado uma compra selecionando realizar novo cadastro
                Then deverá ser apresentado os campos pessoais para preenchimento

            Scenario: Campo Inválido Cadastro
                When preencher um campo com informações inválidas
                Then o campo deverá sinalizar com um aviso de campo inválido
                
            Scenario: Pedido Realizado com Sucesso
                When finalizar o cadastro, a tela de informações de entrega será apresentada
                Then o meio de pagamento deverá ser apresentado, escolha a opção desejada
                And ao finalizar o pagamento, o número do pedido gerado