const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;
const utils = require('../utils/exampleUtils.js').Utils;
const testBasePage = require('../pages/testBase/testBasePage.js').TestBasePage;
const paymentsPage =
	require('../pages/paymentsPage/paymentsPage.js').PaymentsPage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	// 'Demo login test to test arena': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');

	// 	element('#email').sendKeys('administrator@testarena.pl');
	// 	element('#password').sendKeys('sumXQQ72$L');
	// 	element('#login').click();
	// 	browser.expect.url().to.contain('demo.testarena.pl/');
	// },

	// 'Demo logout test': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');

	// 	element('#email').sendKeys('administrator@testarena.pl');
	// 	element('#password').sendKeys('sumXQQ72$L');
	// 	element('#login').click();
	// 	element('.icons-switch').click();
	// 	browser.expect.url().to.contain('testarena.pl/zaloguj');
	// },

	// 'Demo base test': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');
	// 	new loginPage(browser).login();
	// 	element('#wrapper > ul > li.item5 > a').click();
	// 	element('#content > article > nav > ul > div > a').click();
	// 	element(
	// 		'#content > article > nav > ul > div > div > ul > li:nth-child(2) > a'
	// 	).click();

	// 	new testBasePage(browser).fillForm(
	// 		'testKrzyśka' + new utils().randomString(),
	// 		new utils().randomString(4999),
	// 		new utils().randomString(999)
	// 	);
	// 	new loginPage(browser).getUrl('/tests');
	// 	new testBasePage(browser).searchTest('testKrzyśka');
	// 	new testBasePage(browser).checkIfTestIsVisible();
	// },

	// 'Demo base test': (browser) => {
	// 	browser.url(browser.globals.baseUrl[2]);
	// 	new paymentsPage(browser).fillForm('Krzysiek', 'krzysie@test.pl');
	// 	new paymentsPage(browser).checkPayment();
	// },

	'Demo base test': (browser) => {
		let loginList = [
			'  -$  ? ',
			'ZAQ!2wsxeeeeeeeeeeeeeeeee',
			'  -$  \n ',
			'ZAQ12ws',
			'8178584490',
			'ZAQ!@wsx',
			']`*?$/&%',
			'ZAQ!2WSX',
			'ĄŚĆŻŚĄŹÓĘŁ',
			'zaq!2wsx',
		];

		for(let i=0; i < 5; i++) {
			browser.url('http://demo.testarena.pl/zaloguj');

			new loginPage(browser).login(loginList[i], loginList[i]+1)
			
		}
	},
};
