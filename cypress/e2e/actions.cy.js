/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('Is testing email address input', () => {
  cy.get('.action-email').type('roberthughes1@gmail.com', { delay: 100 })
  cy.get('.action-email').clear()
})

  it('Is testing focus event.', () => {
    cy.get('.action-focus').focus()
    cy.get('.action-focus').should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')
})
  
  it('Is testing clear command.', () => {
    cy.get('.action-clear').type('Get rid of this text.', {delay: 100})
    cy.get('.action-clear').clear()
})

  it('Is testing single items in drop downs.', () => {
    cy.get('.action-select').select('fr-oranges')
    cy.get('.action-select').should('have.value', 'fr-oranges')
  })

  it('Is testing multiple items in drop downs.', () => {
    cy.get('.action-select-multiple').select(['fr-oranges','fr-bananas'])
    cy.get('.action-select-multiple').invoke('val').should('deep.equal', ['fr-oranges', 'fr-bananas'])
  })
})