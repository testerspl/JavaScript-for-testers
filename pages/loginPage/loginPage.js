const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;



class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	login(email = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
		element(loginSelectors.login).sendKeys(email);
		element(loginSelectors.pass).sendKeys(pass);
		element(loginSelectors.loginBtn).click();
	}

    fillForm(formName, description, result) {

        element('#name').sendKeys(formName);
		element('#description').sendKeys(description);
		element('#result').sendKeys(result);
		element('#add').click();
    }
}


module.exports.LoginPage = LoginPage;
