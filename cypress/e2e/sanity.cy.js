import urls from '../fixtures/urls.json';
import FooterPage from '../pages/FooterPage';
import ProductListingPage from '../pages/ProductListingPage';

/**
 * Test suite for navigating to Ernesta's Pages URLs.
 */
describe("Navigate to Ernesta's Pages URLS", () => {
  /**
   * Test case for navigating to the homepage.
   */
  it('Homepage', () => {
    cy.visit(urls.Base);
    cy.title().should('eq', 'Custom Size Area Rugs | Ernesta');
  });

  /**
   * Test case for navigating to the Product Listing Page.
   */
  it('Product Listing Page', () => {
    cy.visit(urls.PLP);
    cy.title().should('eq', 'Shop All Custom Cut Rugs | Ernesta');
  });

  /**
   * Test case for navigating to the About Us Page.
   */
  it('About Us Page', () => {
    cy.visit(urls.AboutUs);
    cy.title().should('eq', 'Why Ernesta | Ernesta');
  });

  /**
   * Test case for navigating to the Beta Launch Page.
   */
  it('Beta Launch Page', () => {
    cy.visit(urls.BetaLaunch);
    cy.title().should('eq', 'Welcome to Beta | Ernesta');
  });

  /**
   * Test case for navigating to the Care Guide Page.
   */
  it('Care Guide Page', () => {
    cy.visit(urls.CareGuide);
    cy.title().should('eq', 'Rug Care Guide | Ernesta');
  });

  /**
   * Test case for navigating to the Limited Warranty Page.
   */
  it('Limited Warranty Page', () => {
    cy.visit(urls.LimitedWarranty);
    cy.title().should('eq', 'Limited Warranty | Ernesta');
  });

  /**
   * Test case for navigating to the Materials Guide Page.
   */
  it('Materials Guide Page', () => {
    cy.visit(urls.MaterialsGuide);
    cy.title().should('eq', 'Rug Materials Guide: How to Choose the Right Rug | Ernesta');
  });

  /**
   * Test case for navigating to the Privacy Policy Page.
   */
  it('Privacy Policy Page', () => {
    cy.visit(urls.PrivacyPolicy);
    cy.title().should('eq', 'Privacy Policy | Ernesta');
  });

  /**
   * Test case for navigating to the Size Guide Page.
   */
  it('Size Guide Page', () => {
    cy.visit(urls.SizeGuide);
    cy.title().should('eq', 'Custom Rug Sizing Guide | Ernesta');
  });

  /**
   * Test case for navigating to the Support Page.
   */
  it('Support Page', () => {
    cy.visit(urls.Support);
    cy.title().should('eq', 'Support | Ernesta');
  });

  /**
   * Test case for navigating to the Terms of Use Page.
   */
  it('Terms of Use Page', () => {
    cy.visit(urls.TermsOfUse);
    cy.title().should('eq', 'Terms of Use | Ernesta');
  });

  /**
   * Test case for navigating to the Trade Program Page.
   */
  it('Trade Program Page', () => {
    cy.visit(urls.TradeProgram);
    cy.title().should('eq', 'Trade Program | Ernesta');
  });
});

/**
 * Test suite for navigating to Ernesta's Pages through clicking the links in the footer.
 */
describe("Navigate to Ernesta's Pages through clicking the links in the footer", () => {
  /**
   * Test case for navigating to the Beta Launch Page.
   */
  it('Beta Launch', () => {
    cy.visit(urls.Base);
    FooterPage.clickBetaLaunchLink();
    cy.wait(1000);
    cy.title().should('eq', 'Welcome to Beta | Ernesta');
  });

  /**
   * Test case for navigating to the Get in touch Page.
   */
  it('Get in touch', () => {
    cy.visit(urls.Base);
    FooterPage.clickGetInTouchLink();
    cy.wait(1000);
    cy.title().should('eq', 'Support | Ernesta');
  });

  /**
   * Test case for navigating to the Trade Program Page.
   */
  it('Trade Program', () => {
    cy.visit(urls.Base);
    FooterPage.clickTradeProgramLink();
    cy.wait(1000);
    cy.title().should('eq', 'Trade Program | Ernesta');
  });

  /**
   * Test case for navigating to the Care Guide Page.
   */
  it('Care Guide', () => {
    cy.visit(urls.Base);
    FooterPage.clickCareGuideLink();
    cy.wait(1000);
    cy.title().should('eq', 'Rug Care Guide | Ernesta');
  });

  /**
   * Test case for navigating to the Materials Guide Page.
   */
  it('Materials Guide', () => {
    cy.visit(urls.Base);
    FooterPage.clickMaterialsGuideLink();
    cy.wait(1000);
    cy.title().should('eq', 'Rug Materials Guide: How to Choose the Right Rug | Ernesta');
  });

  /**
   * Test case for navigating to the Size Guide Page.
   */
  it('Size Guide', () => {
    cy.visit(urls.Base);
    FooterPage.clickSizeGuideLink();
    cy.wait(1000);
    cy.title().should('eq', 'Custom Rug Sizing Guide | Ernesta');
  });

  /**
   * Test case for navigating to the Why Ernesta Page.
   */
  it('Why Ernesta', () => {
    cy.visit(urls.Base);
    FooterPage.clickWhyErnestaLink();
    cy.wait(1000);
    cy.title().should('eq', 'Why Ernesta | Ernesta');
  });

  /**
   * Test case for navigating to the Terms of Use Page.
   */
  it('Terms of use', () => {
    cy.visit(urls.Base);
    FooterPage.clickTermsOfUseLink();
    cy.wait(1000);
    cy.title().should('eq', 'Terms of Use | Ernesta');
  });

  /**
   * Test case for navigating to the Privacy Policy Page.
   */
  it('Privacy Policy', () => {
    cy.visit(urls.Base);
    FooterPage.clickPrivacyPolicyLink();
    cy.wait(1000);
    cy.title().should('eq', 'Privacy Policy | Ernesta');
  });

  /**
   * Test case for navigating to the Limited Warranty Page.
   */
  it('Limited Warranty', () => {
    cy.visit(urls.Base);
    FooterPage.clickLimitedWarrantyLink();
    cy.wait(1000);
    cy.title().should('eq', 'Limited Warranty | Ernesta');
  });
});

/**
 * Test suite for navigating to the PDP (Product Detail Page).
 */
describe("Navigating to the PDP", () => {
  /**
   * Test case for navigating to the PDP through the PLP (Product Listing Page) by clicking on a product card.
   */
  it('Through the PLP clicking on the product card', () => {
    cy.visit(urls.PLP);
    ProductListingPage.clickOnProductCardName('Ames');
    cy.wait(1000);
    cy.title().should('eq', 'Ames | Plush Loop and Cut Wool Rug | Ernesta');
  });

  /**
   * Test case for navigating to the PDP through the PLP by clicking on a product card after altering the product color.
   */
  it('Through the PLP clicking on the product card after altering the product color', () => {
    cy.visit(urls.PLP);
    cy.wait(1000);
    ProductListingPage.selectColorVariant('Ames', 'Stone');
    cy.wait(1000);
    ProductListingPage.clickOnProductCardName('Ames');
    cy.wait(1000);
    cy.url().should('include', 'Color=Stone');
  });
});