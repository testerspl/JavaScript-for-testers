const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class LoginPage extends baseMethods {

	
	login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
		element(loginSelectors.login).sendKeys(email);
		element(loginSelectors.pass).sendKeys(pass);
		element(loginSelectors.loginBtn).click();
	}
}

module.exports.LoginPage = LoginPage;
