const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;
const logger = require('../configuration/logger/log4js.js').logAll;
module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo login test': (browser) => {
		new loginPage(browser).getUrl();

		browser.assert.title('Protractor practice website - Registration');
	},
};
