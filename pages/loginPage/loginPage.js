const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;
const files = require('../../utils/files.js').DocumentClass;

class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}
}

module.exports.LoginPage = LoginPage;
