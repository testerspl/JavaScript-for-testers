const mainPageSelectors = require('./mainPageSelectors.js');
const basePage = require('../basePage.js').BasePage;

// Przykład np dla narzędzia Cypress
// import basePage from '../basePage'

class MainPage extends basePage {
	// Jeżeli w klasie dziedziczonej jest konstruktor z parametrem
	// to dodajemy słowo super z dodanie
	constructor(browser) {
		super(browser);
	}

	addToCart() {

		browser.FindAllAndClick(mainPageSelectors.addFirstProduct, 'css selector', 0)
		
	}

	goToCartPage() {
		browser.element(mainPageSelectors.cartBtn).click()
	}

	checkProductBtnCost(productPrice = '35.00') {
		// browser.element(mainPageSelectors.cartBtn).getText().assert.valueEquals(' My Cart								- zł 75.00							')
		for (let index = 0; index <= 1; index++) {
			browser.refresh();
		}
		
		browser.expect
			.element(mainPageSelectors.cartBtn)
			.text.to.equal('My Cart - zł ' + productPrice);
	}
}

module.exports.MainPage = MainPage;
