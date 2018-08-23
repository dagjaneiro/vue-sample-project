describe('Blog Post', () => {
  beforeEach(() => {
    cy.visit('')
    cy.contains('qui est esse').click()
  })

  it('renders the blog post title', () => {
    cy.contains('h1', 'qui est esse')
  })

  it('renders the blog post body', () => {
    cy.contains('p', 'est rerum tempore vitae')
  })

  it('renders the "Load Comments" button', () => {
    cy.contains('button', 'Load Comments')
  })

  describe('when the "Load Comments" button is pressed', () => {
    it('renders the comments', () => {
      cy.contains('button', 'Load Comments').click()

      cy.contains('h3', 'Comments')

      cy.contains(
        'ul',
        'et fugit eligendi deleniti quidem qui sint nihil autem'
      )
      cy.contains(
        'ul',
        'repellat consequatur praesentium vel minus molestias voluptatum'
      )
      cy.contains('ul', 'et omnis dolorem')
      cy.contains('ul', 'provident id voluptas')
      cy.contains('ul', 'eaque et deleniti atque tenetur ut quo ut')
    })
  })
})
