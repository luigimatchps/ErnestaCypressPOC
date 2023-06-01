import urls from '../fixtures/urls.json';
import FooterPage from '../pages/FooterPage';
import ProductListingPage from '../pages/ProductListingPage';

describe("Navigate to Ernesta's Pages URLS", () => { 
  it('Homepage', () => {
    cy.visit(urls.Base)
    cy.title().should('eq', 'Custom Size Area Rugs | Ernesta');
  })

  it('Product Listing Page', () => {
    cy.visit(urls.PLP)
    cy.title().should('eq', 'Shop All Custom Cut Rugs | Ernesta');
  })

  it('About Us Page', () => {
    cy.visit(urls.AboutUs)
    cy.title().should('eq', 'Why Ernesta | Ernesta');
  })

  it('Beta Launch Page', () => {
    cy.visit(urls.BetaLaunch)
    cy.title().should('eq', 'Welcome to Beta | Ernesta');
  })

  it('Care Guide Page', () => {
    cy.visit(urls.CareGuide)
    cy.title().should('eq', 'Rug Care Guide | Ernesta');
  })

  it('Limited Warranty Page', () => {
    cy.visit(urls.LimitedWarranty)
    cy.title().should('eq', 'Limited Warranty | Ernesta');
  })

  it('Materials Guide Page', () => {
    cy.visit(urls.MaterialsGuide)
    cy.title().should('eq', 'Rug Materials Guide: How to Choose the Right Rug | Ernesta');
  })

  it('Privacy Policy Page', () => {
    cy.visit(urls.PrivacyPolicy)
    cy.title().should('eq', 'Privacy Policy | Ernesta');
  })

  it('Size Guide Page', () => {
    cy.visit(urls.SizeGuide)
    cy.title().should('eq', 'Custom Rug Sizing Guide | Ernesta');
  })

  it('Support Page', () => {
    cy.visit(urls.Support)
    cy.title().should('eq', 'Support | Ernesta');
  })

  it('Terms of Use Page', () => {
    cy.visit(urls.TermsOfUse)
    cy.title().should('eq', 'Terms of Use | Ernesta');
  })

  it('Trade Program Page', () => {
    cy.visit(urls.TradeProgram)
    cy.title().should('eq', 'Trade Program | Ernesta');
  })

})

describe("Navigate to Ernesta's Pages through clicking the links in the footer", () => {
  it('Beta Launch', () => {
    cy.visit(urls.Base)
    FooterPage.clickBetaLaunchLink()
    cy.wait(1000)
    cy.title().should('eq', 'Welcome to Beta | Ernesta');
  })

  it('Get in touch', () => {
    cy.visit(urls.Base)
    FooterPage.clickGetInTouchLink()
    cy.wait(1000)
    cy.title().should('eq', 'Support | Ernesta');
  })

  it('Trade Program', () => {
    cy.visit(urls.Base)
    FooterPage.clickTradeProgramLink()
    cy.wait(1000)
    cy.title().should('eq', 'Trade Program | Ernesta');
  })

  it('Care Guide', () => {
    cy.visit(urls.Base)
    FooterPage.clickCareGuideLink()
    cy.wait(1000)
    cy.title().should('eq', 'Rug Care Guide | Ernesta');
  })

  it('Materials Guide', () => {
    cy.visit(urls.Base)
    FooterPage.clickMaterialsGuideLink()
    cy.wait(1000)
    cy.title().should('eq', 'Rug Materials Guide: How to Choose the Right Rug | Ernesta');
  })

  it('Size Guide', () => {
    cy.visit(urls.Base)
    FooterPage.clickSizeGuideLink()
    cy.wait(1000)
    cy.title().should('eq', 'Custom Rug Sizing Guide | Ernesta');
  })

  it('Why Ernesta', () => {
    cy.visit(urls.Base)
    FooterPage.clickWhyErnestaLink()
    cy.wait(1000)
    cy.title().should('eq', 'Why Ernesta | Ernesta');
  })

  it('Terms of use', () => {
    cy.visit(urls.Base)
    FooterPage.clickTermsOfUseLink()
    cy.wait(1000)
    cy.title().should('eq', 'Terms of Use | Ernesta');
  })

  it('Privacy Policy', () => {
    cy.visit(urls.Base)
    FooterPage.clickPrivacyPolicyLink()
    cy.wait(1000)
    cy.title().should('eq', 'Privacy Policy | Ernesta');
  })

  it('Limited Warranty', () => {
    cy.visit(urls.Base)
    FooterPage.clickLimitedWarrantyLink()
    cy.wait(1000)
    cy.title().should('eq', 'Limited Warranty | Ernesta');
  })
})

describe("Navigating to the PDP", () => {
  it('Through the PLP clicking on the product card', () => {
    cy.visit(urls.PLP)
    ProductListingPage.clickOnProductCardName('Ames')
    cy.wait(1000)
    cy.title().should('eq', 'Ames | Plush Loop and Cut Wool Rug | Ernesta')
  })

  it('Through the PLP clicking on the product card after altering the product color', ()=> {
    cy.visit(urls.PLP)
    cy.wait(1000)
    ProductListingPage.selectColorVariant('Ames', 'Stone')
    cy.wait(1000)
    ProductListingPage.clickOnProductCardName('Ames')
    cy.wait(1000)
    cy.url().should('include', 'Color=Stone')
  })
})
