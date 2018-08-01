describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('')
    cy.contains('qui est esse').click()

    cy.url().should('include', '/posts/2')
  })
})
