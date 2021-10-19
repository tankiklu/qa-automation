
beforeEach(() => {
    console.info("assa9898sda89s98sda89sda")

    cy.intercept({
        method: 'GET',
        hostname: 'mc.yandex.ru',
    }, req => {
        req.destroy();
    });

    cy.intercept({
        method: 'GET',
        hostname: 'yandex.ru'
    }, req => {
        req.destroy();
    });
});

describe("Search", () => {

    it("Name Search", () => {
        cy.visit('https://readmanga.io/');
        cy.get('input[name="q"]')
            .type("Molly")
            .should("have.value", "Molly");
    });

    it("Click button search", () => {
        cy.get('[type="submit"]').click();
    });

});

describe("navigation", () => {

    before(() => {

    });

    it("Read manga of start", () => {
        cy.visit('https://readmanga.io/reinkarnaciia_voennogo__A5327');
        cy.contains('Читать мангу с первой главы').click()
        cy.get('[class="page-selector form-control"]').should('have.value', '0')
    });
    
    it("Next page", () => {
        cy.get('.topControl:nth-of-type(1) .pager-control .nextButton').first().click();
        cy.get('[class="page-selector form-control"]').should('have.value', '1')
    });
    
    it("Prev page", () => {
        cy.get('.topControl:nth-of-type(1) .pager-control .prevButton').first().click();
        cy.get('[class="page-selector form-control"]').should('have.value', '0')
    });

    // it("First page - lost page", () =>{
    //     cy.get('[class="page-selector form-control"]').
    //     cy.get('[class="page-selector form-control"]').children('option').length);
    // }) 

    
});
