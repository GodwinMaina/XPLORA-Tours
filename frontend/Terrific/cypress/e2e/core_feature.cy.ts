/// <reference types="Cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.get('.homebook')
    cy.get('.tour-card')
    cy.get('.home')
    cy.get('.tour-card > img')
  })
})
