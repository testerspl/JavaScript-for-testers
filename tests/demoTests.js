const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo login test': (browser) => {
		browser.url(
			'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
		);

		new loginPage(browser).login('1', 'd', 'fre');
		new loginPage(browser).chechLogiPageElements();
	},
};
