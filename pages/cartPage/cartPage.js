const cartPageSelectors = require('./cartPageSelectors.js');
const basePage = require('../basePage.js').BasePage;

// Przykład np dla narzędzia Cypress
// import basePage from '../basePage'

class CartPage extends basePage {
	// Jeżeli w klasie dziedziczonej jest konstruktor z parametrem
	// to dodajemy słowo super z dodanie
	constructor(browser) {
		super(browser);
	}

	checkProductPrice(productPrice = '35.00') {

	try {
		browser.element
		.findAll({ selector: cartPageSelectors.firstProductPrice, locateStrategy: 'css selector' }).then((elements)=> { // elements jest tablicą zawierającą elementy strony
			browser.expect.element(elements[0]).text.to.equal('My Cart - zł ' + productPrice)
		})
	} catch (ex) {
		// browser.Log(ex)

		console.error(ex)
	}
	}

}

module.exports.CartPage = CartPage;
