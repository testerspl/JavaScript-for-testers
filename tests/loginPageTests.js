const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;
const loginSelectors = require('../pages/loginPage/loginPageSelectors.js');

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	// after: function () {
	// 	process.exit();
	// },

	// 'Demo login test': (browser) => {
	// 	// let login = new loginPage(browser);

	// 	new loginPage(browser).getUrl().login();

	// 	browser.assert.urlEquals('http://demo.testarena.pl/');
	// },

	'Login to testarena with false data': (browser) => {
		// let login = new loginPage(browser);

		new loginPage(browser)
			.getUrl()
			.login(
				new loginPage(browser).getLoginData()[0],
				new loginPage(browser).getLoginData()[1]
			)
			.checkEmailAndPassFields();
	},

	'Login to testarena with false pass': (browser) => {
		// let login = new loginPage(browser);

		new loginPage(browser)
			.getUrl()
			.login(
				new loginPage(browser).getLoginData()[2],
				new loginPage(browser).getLoginData()[3]
			)
			.checkEmailAndPassFields(
				'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.',
				'Pole wymagane'
			);
	},
};
