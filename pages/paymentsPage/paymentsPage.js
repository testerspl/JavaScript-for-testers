const paymentsSelectors = require('./paymentsPageSelectors');
const baseMethods = require('../baseMethods.js').BaseMethods;

class PaymentsPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	fillForm(myName = '', myEmail = '') {
		element(paymentsSelectors.name).sendKeys(myName);
		element(paymentsSelectors.email).sendKeys(myEmail);
		element(paymentsSelectors.nextBtn).click();
		element(paymentsSelectors.ps4Label).click();
        element(paymentsSelectors.nextBtn).click();
        element(paymentsSelectors.submit).click();
	}

    checkPayment() {
        this.browser.getAlertText((txt) => {

            this.browser.assert.ok(txt.value === 'awesome!')
        })   
    }
}

module.exports.PaymentsPage = PaymentsPage;
