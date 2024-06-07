describe('Deve verificar um filme/série se ele está no gênero certo', () => {
    before(() => {
        cy.wait(1000);
        cy.login('berton', 'teste2');
        cy.get("#image1").click();
    });

    it('Deve verificar se um filme/série está no gênero certo', () => {
        cy.wait(3000);

        cy.get('.trailer-item').should('be.visible').first().within(() => {
            cy.get('.input-my-list').check(); // adiciono
            cy.get('.input-my-list').should('be.checked');
        });

        cy.wait(3000);

        cy.get('ul.trailers-list#my-list').should('be.visible').within(() => {
            cy.get('.trailer-item').should('exist');
        });

        // Verifica se os filmes/séries do gênero selecionado são exibidos dinamicamente
        cy.get('.h3-sections').each(($genreSection) => {
            cy.wrap($genreSection).click();
            cy.wait(1000); // Espera para garantir que o conteúdo foi carregado
            cy.wrap($genreSection).next().within(() => {
                cy.get('.trailer-item').should('be.visible');
            });
        });
    });
});