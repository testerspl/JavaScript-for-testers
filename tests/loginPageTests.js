const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;

module.exports = {


	'Base login test': function (browser) {
		let login = new loginPage(browser);

		login.login();
		browser.assert.Visible('.avatar_header');
		browser.end();
	},
};
