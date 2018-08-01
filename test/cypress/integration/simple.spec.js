describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('http://localhost:8080')
    cy.contains('qui est esse').click()

    cy.url().should('include', '/posts/2')
  })
})
