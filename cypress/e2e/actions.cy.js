/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.nowtv.com')
    cy.get('#onetrust-accept-btn-handler').click()
  })

it.only('Login with username and password', () => {
  cy.get('[data-testid="menu-secondary-button"]').click()
  cy.env(['username', 'password']).then(({ username, password }) => {
    cy.get('#userIdentifier').type(username)
    cy.get('#password').type(password, { log: false })
    cy.get('#rememberMe').uncheck()
    cy.get('[data-testid="sign-in-form__submit"]').click()
  })
})

it('select the correct menu item (watch now)', () => {
  cy.get('[data-testid="menu-watch"]').click()
})

it('select the account holder profile', () => {
  cy.get('[data-testid="profile-item-Account Holder"]').click()
})

it('select the sports menu item', () => {
  cy.contains('[data-testid="destination-tile"]', 'Sky Sports').click()
})

it('select the football menu item', () => {
    cy.contains('[data-testid="destination-tile"]', 'Football').click()
})

it('select the Liverpool item', () => {
    cy.contains('[data-testid="destination-tile"]', 'Liverpool').click()
})
})