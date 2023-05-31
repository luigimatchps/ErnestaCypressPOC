class FooterPage {
    elements = {
        whyErnestaLink: () => cy.get('span').contains('Why Ernesta').parent(),
        sizeGuideLink: () => cy.get('span').contains('Size guide').parent(),
        materialsGuideLink: () => cy.get('span').contains('Materials guide').parent(),
        careGuideLink: () => cy.get('span').contains('Care guide').parent(),        
        tradeProgramLink: () => cy.get('span').contains('Trade program').parent(),
        getInTouchLink: () => cy.get('span').contains('Get in touch').parent(),     
        betaLaunchLink: () => cy.get('span').contains('Beta launch').parent()
    };
    
    clickBetaLaunchLink() {
        this.elements.betaLaunchLink.click();
    }

    clickGetInTouchLink() {
        this.elements.getInTouchLink.click();
    }

    clickTradeProgramLink() {
        this.elements.tradeProgramLink.click();
    }

    clickCareGuideLink() {
        this.elements.careGuideLink.click();
    }

    clickMaterialsGuideLink() {
        this.elements.materialsGuideLink.click();
    }

    clickSizeGuideLink() {
        this.elements.sizeGuideLink.click();
    }

    clickWhyErnestaLink() {
        this.elements.whyErnestaLink.click();
    }
}
module.exports = new FooterPage();