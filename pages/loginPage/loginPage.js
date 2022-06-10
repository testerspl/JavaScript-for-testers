const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;


class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	login() {
		element(loginSelectors.login).sendKeys('administrator@testarena.pl');
		element(loginSelectors.pass).sendKeys('sumXQQ72$L');
		element(loginSelectors.loginBtn).click();

		return this
	}

}

module.exports.loginPage = LoginPage;


