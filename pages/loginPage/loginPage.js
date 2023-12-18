const loginSelectors = require('./loginPageSelectors.js')
const basePage = require('../basePage.js')


class LoginPage extends basePage{

    constructor(browser) {
        super(browser)
    }

    login(login = 'standard_user', pass = 'secret_sauce') {
        element(loginSelectors.loginInput).sendKeys(login);
		element(loginSelectors.passInput).sendKeys(pass);
		element(loginSelectors.loginBtn).click();

    }
}

module.exports/LoginPage = LoginPage;