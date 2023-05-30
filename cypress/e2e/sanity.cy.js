import urls from '../fixtures/urls.json' 
describe("Navigate to Ernesta's Pages", () => { 
  it('Homepage', () => {
    cy.visit(urls.Base)
  })

  it('Product Listing Page', () => {
    cy.visit(urls.PLP)
  })
})
