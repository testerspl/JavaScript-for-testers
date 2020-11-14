const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}


}

module.exports.LoginPage = LoginPage;
