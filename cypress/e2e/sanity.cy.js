import urls from '../fixtures/urls.json' 
describe("Navigate to Ernesta's Pages", () => { 
  it('Homepage', () => {
    cy.visit(urls.Base)
  })

  it('Product Listing Page', () => {
    cy.visit(urls.PLP)
  })

  it('About Us Page', () => {
    cy.visit(urls.AboutUs)
  })

  it('Beta Launch Page', () => {
    cy.visit(urls.BetaLaunch)
  })

  it('Care Guide Page', () => {
    cy.visit(urls.CareGuide)
  })

  it('Limited Warranty Page', () => {
    cy.visit(urls.LimitedWarranty)
  })

  it('Materials Guide Page', () => {
    cy.visit(urls.MaterialsGuide)
  })

  it('Privacy Policy Page', () => {
    cy.visit(urls.PrivacyPolicy)
  })

  it('Size Guide Page', () => {
    cy.visit(urls.SizeGuide)
  })

  it('Support Page', () => {
    cy.visit(urls.Support)
  })

  it('Terms of Use Page', () => {
    cy.visit(urls.TermsOfUse)
  })

  it('Trade Program Page', () => {
    cy.visit(urls.TradeProgram)
  })
})
