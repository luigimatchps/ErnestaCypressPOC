class ProductListingPage {
    elements = {
        productCard: (productName) => this.elements.productCardName(productName).parent().parent(),
        productImage: (productName) => this.elements.productCard(productName).find('div[class="relative aspect-square"] a'),
        productCardName: (productName) => cy.get('[data-test="product-grid"]')
            .find('a').contains(productName),
        productColorVariant: (productName, variantName) =>this.elements.productCard(productName).find('button[data-text="'+variantName+'"]')
    };

    clickOnProductCardName(productName){
        this.elements.productCardName(productName).click()
    }

    selectColorVariant(productName, colorVariant){
        this.elements.productColorVariant(productName, colorVariant).click()
    }
}
module.exports = new ProductListingPage();