const baseMethods = require('../baseMethods.js').BaseMethods;
const loginSelectors = require('./loginPageSelectors.js');

class LoginPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	login(
		loginSelector = loginSelectors.username,
		login = 'angular',
		passSelector = loginSelectors.password,
		pass = 'password',
		baseUsernameSelector = loginSelectors.baseUsername,
		baseUsername = 'Przykładowy użytkownik',
		loginBtnSelector = loginSelectors.loginBtn
	) {
		this.browser
			.clearValue(loginSelector)
			.setValue(loginSelector, login)
			.clearValue(passSelector)
			.setValue(passSelector, pass)
			.clearValue(baseUsernameSelector)
			.setValue(baseUsernameSelector, baseUsername)
			.click(loginBtnSelector);
	}
}


module.exports.LoginPage = LoginPage;
