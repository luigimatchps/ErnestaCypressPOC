/**
Page object representing the Footer section of the website.
*/
class FooterPage {
    elements = {
    whyErnestaLink: () => cy.get('footer a[href="/about-us"]'),
    sizeGuideLink: () => cy.get('footer a[href="/custom-rug-size-guide"]'),
    materialsGuideLink: () => cy.get('footer a[href="/materials-guide"]'),
    careGuideLink: () => cy.get('footer a[href="/care-guide"]'),
    tradeProgramLink: () => cy.get('footer a[href="/trade-program"]'),
    getInTouchLink: () => cy.get('footer a[href="/contact-us"]'),
    betaLaunchLink: () => cy.get('footer a[href="/beta-launch"]'),
    termsOfUse: () => cy.get('footer a[href="/terms-of-use"]'),
    privacyPolicy: () => cy.get('footer a[href="/privacy-policy"]'),
    limitedWarranty: () => cy.get('footer a[href="/limited-warranty"]'),
    };
    /**    
    Clicks on the Limited Warranty link in the footer.
    */
    clickLimitedWarrantyLink() {
    cy.wait(1000);
    this.elements.limitedWarranty().click();
    }
    /**    
    Clicks on the Privacy Policy link in the footer.
    */
    clickPrivacyPolicyLink() {
    cy.wait(1000);
    this.elements.privacyPolicy().click();
    }
    /**    
    Clicks on the Terms of Use link in the footer.
    */
    clickTermsOfUseLink() {
    cy.wait(1000);
    this.elements.termsOfUse().click();
    }
    /**    
    Clicks on the Beta Launch link in the footer.
    */
    clickBetaLaunchLink() {
    cy.wait(1000);
    this.elements.betaLaunchLink().click();
    }
    /**    
    Clicks on the Get in Touch link in the footer.
    */
    clickGetInTouchLink() {
    cy.wait(1000);
    this.elements.getInTouchLink().click();
    }
    /**    
    Clicks on the Trade Program link in the footer.
    */
    clickTradeProgramLink() {
    cy.wait(1000);
    this.elements.tradeProgramLink().click();
    }
    /**    
    Clicks on the Care Guide link in the footer.
    */
    clickCareGuideLink() {
    cy.wait(1000);
    this.elements.careGuideLink().click();
    }
    /**    
    Clicks on the Materials Guide link in the footer.
    */
    clickMaterialsGuideLink() {
    cy.wait(1000);
    this.elements.materialsGuideLink().click();
    }
    /**    
    Clicks on the Size Guide link in the footer.
    */
    clickSizeGuideLink() {
    cy.wait(1000);
    this.elements.sizeGuideLink().click();
    }
    /**    
    Clicks on the Why Ernesta link in the footer.
    */
    clickWhyErnestaLink() {
    cy.wait(1000);
    this.elements.whyErnestaLink().click();
    }
    }
    module.exports = new FooterPage();