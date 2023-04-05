const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;
const mainPage = require('../pages/mainPage/mainPage.js').MainPage;
const testBasePage = require('../pages/testBase/testBasePage.js').TestBasePage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	beforeEach: function (browser) {
		// browser.url('http://demo.testarena.pl/zaloguj');
		new loginPage(browser).getUrl('http://demo.testarena.pl/zaloguj');
	},

	// 'Demo login test to test arena': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');

	// 	new loginPage().login()

	// 	browser.expect.url().to.contain('demo.testarena.pl/');
	// },

	// 'Demo logout test': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');

	// 	new loginPage().login()
	// 	browser.expect.url().to.contain('demo.testarena.pl/');

	// 	element('.icons-switch').click()

	// 	browser.expect.url().to.contain('/zaloguj');

	// 	browser.expect.element('.front-log').to.be.visible;
	// 	browser.expect.element('.front-log').to.not.be.visible;
	// },

	'Demo add test case to test base': (browser) => {
		new loginPage(browser).login();
		new mainPage(browser).clickTestBaseMenuOption();
		new testBasePage(browser)
			.goToAddTest()
			.fillForm('Nazwa testuKrzysiek', 'Opis1234567', 'Rezultat', 'testCase')
			.checkAddTest();
	},
	'Demo add test case to test base': (browser) => {
		new loginPage(browser).login();
		new mainPage(browser).clickTestBaseMenuOption();
		new testBasePage(browser).searchTest('Przypadek testowy logowanie').searchTest()
	},
};
