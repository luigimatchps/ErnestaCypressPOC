class FooterPage {
    elements = {
        whyErnestaLink: () => cy.get('span').contains('Why Ernesta').parent(),
        sizeGuideLink: () => cy.get('span').contains('Size guide').parent(),
        whyErnestaLink: () => cy.get('span').contains('Materials guide').parent(),
        sizeGuideLink: () => cy.get('span').contains('Care guide').parent(),        
        whyErnestaLink: () => cy.get('span').contains('Trade program').parent(),
        sizeGuideLink: () => cy.get('span').contains('Get in touch').parent(),     
        whyErnestaLink: () => cy.get('span').contains('Beta launch').parent()
    };    
}
module.export = new FooterPage();