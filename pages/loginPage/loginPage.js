const loginPageSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class LoginPage extends baseMethods {
    
	constructor(browser) {
		super(browser);
	}

	// login(name = 'angular', pass = 'password', userName = 'angular') {
	// 	element(loginPageSelectors.name).sendKeys(name);
	// 	element(loginPageSelectors.pass).sendKeys(pass);
	// 	element(loginPageSelectors.userName).sendKeys(userName);
	// }

	// chechLogiPageElements() {
	// 	browser.expect.element(loginPageSelectors.userDataDiv).to.be.visible;
	// 	browser.expect
	// 		.element(loginPageSelectors.userDataDiv)
	// 		.text.to.contain('Username: angular' + '\n' + 'Password: password');
	// 	browser.expect
	// 		.element(loginPageSelectors.nameValidationText)
	// 		.text.to.contain(
	// 			'Your username must be between 3 and 50 characters long'
	// 		);
	// }

	login(name = 'administrator@testarena.pl', pass = 'sumXQQ72$L') {
		element(loginPageSelectors.email).sendKeys(name);
		element(loginPageSelectors.testArenaPass).sendKeys(pass);
		this.browser.click(loginPageSelectors.testArenaLoginBtn);

		return this;
	}

	logout() {
		browser.expect.element(loginPageSelectors.logoutBtn).to.be.visible;
		this.browser.click(loginPageSelectors.logoutBtn);

		return this;
	}

	chechLogiPageElements() {
		browser.expect.url().to.contain('/zaloguj');
		browser.expect.element(loginPageSelectors.loginForm).to.be.visible;
		browser.expect.element(loginPageSelectors.footer).to.be.visible;

		return this;
	}
}

module.exports.LoginPage = LoginPage;
