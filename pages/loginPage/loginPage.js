const loginSelectors = require('./loginPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;
const files = require('../../utils/files.js').DocumentClass;

class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	getLoginData() {
		return new files().readFile('lib/przykładowyPlik.txt');
	}

	login(
		email = 'administrator@testarena.pl',
		pass = 'sumXQQ72$L',
		loginSelector = loginSelectors.email,
		passSelector = loginSelectors.password,
		loginBtnSelector = loginSelectors.loginBtn
	) {
		this.browser
			.clearValue(loginSelector)
			.setValue(loginSelector, email)
			.clearValue(passSelector)
			.setValue(passSelector, pass)
			.click(loginBtnSelector);

		return this;
	}

	checkEmailAndPassFields(
		emailText = 'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.',
		passText = 'Adres e-mail i/lub hasło są niepoprawne.',
		emailFieldCallback,
		passFieldCallback
	) {
		this.getTxtFromElement(
			loginSelectors.emailError,
			emailText,
			emailFieldCallback
		);
		this.getTxtFromElement(
			loginSelectors.passError,
			passText,
			passFieldCallback
		);

		return this;
	}
}

module.exports.LoginPage = LoginPage;
