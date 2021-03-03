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

	checkEmptyDataForm() {
		this.browser
			.click(loginSelectors.username)
			.click(loginSelectors.password)
			.click(loginSelectors.baseUsername)
			.click(loginSelectors.loginBtn);

		this.getTxtFromElement(
			loginSelectors.userNameWalidationText,
			(textUsername) => {
				this.getTxtFromElement(
					loginSelectors.passWalidationText,
					(textPass) => {
						this.browser.assert.strictEqual(
							textUsername.value,
							'You did not enter a username'
						);
						this.browser.assert.strictEqual(
							textPass.value,
							'You did not enter a username'
						);
					}
				);
			}
		);

		return this;
	}

	checkDeletedElement() {
		this.browser
			.click(
				'body > table > tbody > tr:nth-child(1) > td:nth-child(11) > button > i'
			)
			.click(
				'body > div.modal.ng-scope > div.modal-footer > button.btn.ng-scope.ng-binding.btn-primary'
			);
		this.browser.expect.element('#main').to.not.be.present;
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
