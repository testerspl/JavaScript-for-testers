const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;

module.exports = {


	'Base login test': function (browser) {
		let login = new loginPage(browser);

		login.getUrl()
		browser.pause(10000)
		browser.end();
	},
};
