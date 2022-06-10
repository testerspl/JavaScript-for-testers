const mainPage = require('../pages/mainPage/mainPage.js').mainPage;
const loginPage = require('../pages/loginPage/loginPage.js').loginPage;
const testBasePage = require('../pages/testBase/testBase.js').testBasePage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	// 'Demo login test': (browser) => {
	// 	browser.url(
	// 		'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
	// 	);

	// 	new loginPage(browser).login('1', 'd', 'fre');
	// 	new loginPage(browser).chechLogiPageElements();
	// },

	// 'Demo login test to test arena': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');

	// 	element('').sendKeys('administrator@testarena.pl');
	// 	element('').sendKeys('sumXQQ72$L');
	// 	element('').click();
	// 	browser.expect.url().to.contain('demo.testarena.pl/');
	// },

	// 'Demo logout test from test arena': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');

	// 	element('#email').sendKeys('administrator@testarena.pl');
	// 	element('#password').sendKeys('sumXQQ72$L');
	// 	element('#login').click();
	// 	element('.icons-switch.icon-20').click();
	// 	browser.expect.url().to.contain('http://demo.testarena.pl/zaloguj');
	// 	browser.expect
	// 		.element(
	// 			'#text-2 > div > form > div.login_table > div.remember_check > label'
	// 		)
	// 		.text.to.equal('Zapamiętaj mnie');
	// 	browser.expect.element('.front-log').to.be.visible;
	// },

	// 'Demo footr test': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');

	// 	browser.expect.url().to.contain('http://demo.testarena.pl/zaloguj');
	// 	browser.expect
	// 		.element(
	// 			'#text-2 > div > form > div.login_table > div.remember_check > label'
	// 		)
	// 		.text.to.equal('Zapamiętaj mnie');
	// 	browser.expect.element('.front-log').to.be.visible;

	// 	// footer

	// 	browser.expect
	// 		.element('#footer_static > span:nth-child(1) > a')
	// 		.text.to.equal('Kokpit');
	// 	browser.expect.element('#footer_static > span:nth-child(1) > a').to.be
	// 		.visible;

	// 	browser.expect
	// 		.element('#footer_static > span:nth-child(2) > a')
	// 		.text.to.equal('Regulamin');
	// 	browser.expect.element('#footer_static > span:nth-child(2) > a').to.be
	// 		.visible;

	// 	browser.expect
	// 		.element('#footer_static > span:nth-child(3) > a')
	// 		.text.to.equal('Dokumentacja');
	// 	browser.expect.element('#footer_static > span:nth-child(3) > a').to.be
	// 		.visible;

	// 	browser.expect
	// 		.element('#footer_static > span:nth-child(4) > a')
	// 		.text.to.equal('Kontakt');
	// 	browser.expect.element('#footer_static > span:nth-child(4) > a').to.be
	// 		.visible;

	// 	browser.expect.element('#footer_static > span:nth-child(5) > a').to.be
	// 		.visible;

	// 	browser.expect
	// 		.element({
	// 			selector: '#footer_static>*',
	// 			index: 6,
	// 		})
	// 		.text.to.equal('(version 3.1.1085)');
	// const footerText = element({
	// 	selector: '#footer_static>*',
	// 	index: 5,
	// });
	// browser.expect.element(footerText).to.be.visible;
	// },

	'Add test to test base': (browser) => {
		new loginPage(browser).getUrl(browser.globals.baseUrl[0]).login();
		new mainPage(browser).checkMainPageElements().clickTestBaseMenuOption();

		new testBasePage(browser)
			.clickAddOption()
			.fillTestForm()
			.checkAddTestToTestBase();
	},
};
