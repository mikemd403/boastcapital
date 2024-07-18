/// <reference types="cypress" />

describe('newsletter component e2e testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/talk-to-an-expert/')
  })

  it('page should load', () => {
    cy.visit('http://localhost:5173/talk-to-an-expert/')
  })

  it('newsletter card should render and be visible', () => {
    cy.get("[data-test='news-letter-sign-up-card']")
      .should('be.visible');
  })

  it('Card should be not visible when chevron is clicked, and newsletter button should appear', () => {
    cy.get("[data-test='news-letter-close-button']")
      .click();
    cy.get("[data-test='news-letter-sign-up-card']")
      .should('not.exist');
    cy.get("[data-test='news-letter-sign-up-button']")
      .should('be.visible');
  })

  it('Card should reappear if closed when newsletter button pressed', () => {
    cy.get("[data-test='news-letter-close-button']")
      .click();
    cy.get("[data-test='news-letter-sign-up-button']")
      .click();
    cy.get("[data-test='news-letter-sign-up-card']")
      .should('be.visible');
  })

  it('Validation trigger error if incorrect email format', () => {
    cy.get("[data-test='news-letter-sign-up-card-textfield']")
      .type("12asdfgmail.com");
    cy.get("[data-test='news-letter-sign-up-card-button']")
      .click();
    cy.get("[data-test='news-letter-sign-up-card-error']")
      .should('be.visible');
  })

  it('Should display success card if email valid', () => {
    cy.get("[data-test='news-letter-sign-up-card-textfield']")
      .type("boast@gmail.com");
    cy.get("[data-test='news-letter-sign-up-card-button']")
      .click();
    cy.get("[data-test='news-letter-success-message']")
      .should('be.visible');
  })

  it('Success card should disappear after 3 seconds', () => {
    cy.get("[data-test='news-letter-sign-up-card-textfield']")
      .type("boast@gmail.com");
    cy.get("[data-test='news-letter-sign-up-card-button']")
      .click();
    cy.get("[data-test='news-letter-success-message']")
      .should('be.visible');
    cy.wait(3500);
    cy.get("[data-test='news-letter-success-message']")
      .should('not.exist');
  })

})
