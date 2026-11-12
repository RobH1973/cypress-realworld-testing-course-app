describe('rob-testing', () => {
  beforeEach(() => {
    cy.visit('https://bbc.co.uk')
  })

it('has buttons', () => {
    cy.get('[data-testid="accept-button"]').click()
    cy.get('.ssrcss-1fcz44-NavigationLink-AccountLink').click()
    cy.origin('https://account.bbc.com', () => {
        cy.get('#username').type('roberthughes1@gmail.com')
        cy.get('[data-testid="form"] button[type="submit"]').click()
        cy.get('#password').type('Vanhalen1!')
        cy.get('[data-testid="form"] button[type="submit"]').click()
  })
    cy.contains('h2 a', 'News headlines').click()
    cy.get('h2 a[href="/news/england"]').click()
})
})