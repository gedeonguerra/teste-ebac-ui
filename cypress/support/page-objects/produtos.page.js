class ProdutosPage {
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista() {
        cy.get('.product-block')
            .eq(0)
            .click()
    }

    visitarProduto() {

    }

    addProdutoCarrinho() {

    }

}

export default new ProdutosPage()