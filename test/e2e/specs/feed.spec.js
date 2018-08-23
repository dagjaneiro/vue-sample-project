describe('Post Feed', () => {
  beforeEach(() => {
    // intercept ajax /posts request
    cy.server()
    cy.route('GET', '/posts').as('posts')
  })

  it('renders the first 100 blog posts', () => {
    cy.visit('')

    cy.wait('@posts')

    cy.get('li > ul').should('have.length', 100)
  })

  describe('when we click on a blog post', () => {
    it('navigates to the blog post', () => {
      cy.visit('')
      cy.contains('qui est esse').click()

      cy.url().should('contain', '/posts/2')
    })
  })
})

describe('Integration - Post Feed', () => {
  beforeEach(() => {
    // intercept ajax /posts request
    cy.server()
    cy.route('GET', '/posts', 'fixture:posts.json').as('posts')
  })

  it('renders the first 100 blog posts', () => {
    cy.visit('')

    cy.wait('@posts')

    cy.get('li > ul').should('have.length', 3)
  })

  describe('when we click on a blog post', () => {
    it('navigates to the blog post', () => {
      cy.visit('')
      cy.contains('stubbed blog post 2').click()

      cy.url().should('contain', '/posts/2')
    })
  })
})
