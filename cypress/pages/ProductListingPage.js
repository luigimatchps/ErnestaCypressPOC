/**
Page object representing the Product Listing Page (PLP) of the website.
*/
class ProductListingPage {
    elements = {
    productCard: (productName) => this.elements.productCardName(productName).parent().parent(),
    productImage: (productName) => this.elements.productCard(productName).find('div[class="relative aspect-square"] a'),
    productCardName: (productName) => cy.get('[data-test="product-grid"]')
    .find('a').contains(productName),
    productColorVariant: (productName, variantName) => this.elements.productCard(productName).find('button[data-text="'+variantName+'"]')
    };
    /**    
    Clicks on the specified product card name on the Product Listing Page.
    @param {string} productName - The name of the product card to click.
    */
    clickOnProductCardName(productName) {
    this.elements.productCardName(productName).click();
    }
    /**    
    Selects the specified color variant for a product on the Product Listing Page.
    @param {string} productName - The name of the product.
    @param {string} colorVariant - The name of the color variant to select.
    */
    selectColorVariant(productName, colorVariant) {
    this.elements.productColorVariant(productName, colorVariant).click();
    }
    }
    module.exports = new ProductListingPage();