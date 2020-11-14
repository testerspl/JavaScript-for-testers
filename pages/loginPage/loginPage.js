const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	getTextData(selector, callback) {
		this.browser.element('css selector', selector, (ele) => {
			this.browser.elementIdText(ele.value.ELEMENT, callback);
		});
	}
}

module.exports.LoginPage = LoginPage;
