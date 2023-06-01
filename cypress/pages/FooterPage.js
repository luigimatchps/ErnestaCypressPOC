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
    
    clickLimitedWarrantyLink() {
        cy.wait(1000)
        this.elements.limitedWarranty().click();
    }

    clickPrivacyPolicyLink() {
        cy.wait(1000)
        this.elements.privacyPolicy().click();
    }

    clickTermsOfUseLink() {
        cy.wait(1000)
        this.elements.termsOfUse().click();
    }

    clickBetaLaunchLink() {
        cy.wait(1000)
        this.elements.betaLaunchLink().click();
    }

    clickGetInTouchLink() {
        cy.wait(1000)
        this.elements.getInTouchLink().click();
    }

    clickTradeProgramLink() {
        cy.wait(1000)
        this.elements.tradeProgramLink().click();
    }

    clickCareGuideLink() {
        cy.wait(1000)
        this.elements.careGuideLink().click();
    }

    clickMaterialsGuideLink() {
        cy.wait(1000)
        this.elements.materialsGuideLink().click();
    }

    clickSizeGuideLink() {
        cy.wait(1000)
        this.elements.sizeGuideLink().click();
    }

    clickWhyErnestaLink() {
        cy.wait(1000)
        this.elements.whyErnestaLink().click();
    }
}
module.exports = new FooterPage();