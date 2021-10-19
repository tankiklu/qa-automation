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

describe("Login", () => {
    it("click a link register", () => {
     cy.visit('https://readmanga.io/');
      cy.contains('Регистрация').should('have.attr', 'href', 'https://grouple.co/internal/auth/register?siteId=1');

    });
    it("Fill in the fields", () => {
        cy.visit('https://grouple.co/internal/auth/register?siteId=1');
        cy.get('input[name="username"]')
        .type("Molly")
        .should("have.value", "Molly");

      cy.get('input[name="email"]')
      .type("tetyana24@gmail.com")
      .should("have.value", "tetyana24@gmail.com");

      cy.get('input[name="password"]')
      .type("452389761")
      .should("have.value", "452389761");

      cy.get('input[name="password1"]')
      .type("452389761")
      .should("have.value", "452389761");

      });

      it("Registration", () =>{
        cy.get('[type="checkbox"]').check();
        cy.get('[type="submit"]').click();
      });

      it("log in", () =>{
        cy.visit('https://grouple.co/internal/auth/login?siteId=1');

        cy.get('input[name="username"]')
        .type("Tankik")
        .should("have.value", "Tankik");

        cy.get('input[name="password"]')
        .type("131443")
        .should("have.value", "131443");

        cy.get('[type="submit"]').click();
      });
  });
