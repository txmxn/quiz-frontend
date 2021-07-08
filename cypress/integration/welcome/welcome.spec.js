/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Tests der Welcome-Seite', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:8080')
  })

  it('Beginne mit der Welcome-Seite', () => {
    cy.get('[id=welcome-body] img');
  })

  it('Navigiere zu Hilfe und zurück', () => {
    cy.get('[class=header-elements]').contains("HILFE").click();
    cy.get('[id=help-body]');
    cy.get('[class=header-elements]').contains("ZURÜCK").click();
    cy.get('[id=welcome-body]');
  })

  it('Starten und Abbrechen des Quiz', () => {
    cy.get('[class=header-elements]').contains("START").click();
    cy.get('[id=body-part]');
    cy.get('[class=header-elements]').contains("ZURÜCK").click();
    cy.get('[id=welcome-body]');
  })

})
