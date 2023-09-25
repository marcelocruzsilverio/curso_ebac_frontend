describe("Testes para a página de candidatura", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve preencher o formulário de cadastro", () => {
    cy.get('input[type="text"]').type("Marcelo Cruz");
    cy.get('input[type="email"]').type("marcelo@marcelo.com");
    cy.get('input[type="tel"]').type("9999999999");
    cy.get("input").should("have.length", 3);
  });

  it("Deve adicionar um contato", () => {
    cy.get('input[type="text"]').type("Marcelo Cruz");
    cy.get('input[type="email"]').type("marcelo@marcelo.com");
    cy.get('input[type="tel"]').type("9999999999");
    cy.get(".adicionar").click();
    cy.get("h2").should("contain", "4 contatos na agenda");
  });

  it("Deve editar um contato com sucesso", () => {
    cy.get("div.sc-beqWaB.eQdhbg.contato button.edit").then(($buttons) => {
      const lastIndex = $buttons.length - 1;
      cy.wrap($buttons).eq(lastIndex).click();
    });

    cy.get('input[type="text"]').should("have.value", "Marcelo Cruz");
    cy.get('input[type="email"]').should("have.value", "marcelo@marcelo.com");
    cy.get('input[type="tel"]').should("have.value", "9999999999");

    cy.get('input[type="text"]').clear().type("Marcelo Silvério da Cruz");
    cy.get('input[type="email"]').clear().type("marcelo@gmail.com");
    cy.get('input[type="tel"]').clear().type("31 12345678");
    cy.get(".alterar").first().click();

    cy.get("div.sc-beqWaB.eQdhbg.contato ul:last li")
      .eq(0)
      .should("have.text", "Marcelo Silvério da Cruz");
    cy.get("div.sc-beqWaB.eQdhbg.contato ul:last li")
      .eq(1)
      .should("have.text", "31 12345678");
    cy.get("div.sc-beqWaB.eQdhbg.contato ul:last li")
      .eq(2)
      .should("have.text", "marcelo@gmail.com");

    cy.get('input[type="text"]').should("have.value", "");
    cy.get('input[type="email"]').should("have.value", "");
    cy.get('input[type="tel"]').should("have.value", "");
  });

  it("Deve remover o último contato adicionado", () => {
    cy.get("h2").should("contain", "4 contatos na agenda");
    cy.get("div.sc-beqWaB.eQdhbg.contato button.delete").then(($buttons) => {
      const lastIndex = $buttons.length - 1;
      cy.wrap($buttons).eq(lastIndex).click();
    });
    cy.get("h2").should("contain", "3 contatos na agenda");
  });
});
