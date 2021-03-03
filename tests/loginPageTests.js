const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;
const logger = require('../configuration/logger/log4js.js').logAll;

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	// 'Demo login test': (browser) => {
	// 	new loginPage(browser).getUrl();
	// 	browser.Login();
	// 	new loginPage(browser).getTxtFromElement(
	// 		'body > div.jumbotron > div > div > div > h1',
	// 		(text) => {
	// 			browser.assert.strictEqual(text.value, 'Home');
	// 		}
	// 	);
	// },

	// 'Demo login test with emty data': (browser) => {
	// 	new loginPage(browser).getUrl().checkEmptyDataForm();
	// },

	'Demo login test with emty data': (browser) => {
		new loginPage(browser)
			.getUrl(browser.globals.baseUrl[2])
			.checkDeletedElement();

			logger.error()
	},
};
