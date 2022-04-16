const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo login test': (browser) => {
		browser.url('http://demo.testarena.pl/zaloguj');

		new loginPage(browser).login().logout().chechLogiPageElements();
        
	},
};
