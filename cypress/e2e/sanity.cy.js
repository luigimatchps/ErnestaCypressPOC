import urls from '../fixtures/urls.json' 
describe("Navigate to Ernesta's Pages", () => { 
  it('Homepage', () => {
    cy.visit(urls.Base)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Product Listing Page', () => {
    cy.visit(urls.PLP)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('About Us Page', () => {
    cy.visit(urls.AboutUs)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Beta Launch Page', () => {
    cy.visit(urls.BetaLaunch)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Care Guide Page', () => {
    cy.visit(urls.CareGuide)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Limited Warranty Page', () => {
    cy.visit(urls.LimitedWarranty)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Materials Guide Page', () => {
    cy.visit(urls.MaterialsGuide)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Privacy Policy Page', () => {
    cy.visit(urls.PrivacyPolicy)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Size Guide Page', () => {
    cy.visit(urls.SizeGuide)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Support Page', () => {
    cy.visit(urls.Support)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Terms of Use Page', () => {
    cy.visit(urls.TermsOfUse)
    cy.title().should().not().be('Not found | Ernesta');
  })

  it('Trade Program Page', () => {
    cy.visit(urls.TradeProgram)
    cy.title().should().not().be('Not found | Ernesta');
  })
})
