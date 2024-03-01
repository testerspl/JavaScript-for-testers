const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;
const mainPage = require('../pages/mainPage/mainPage.js').MainPage;
const cartPage = require('../pages/cartPage/cartPage.js').CartPage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	// 'Demo login test to test arena': (browser) => {
	// 	const loginClass = new loginPage(browser)

	// 	loginClass.getUrl(browser.globals.baseUrl[0])
	// 	loginClass.login()

	// 	loginClass.assertAppUrl()
	// },

	// 'Demo login test to way2automation': (browser) => {
	// 	const loginClass = new loginPage(browser)

	// 	loginClass.getUrl(browser.globals.baseUrl[1])
	// 	loginClass.login('way2automation', 'angular', 'password', 'Krzysiek')

	// 	loginClass.assertAppUrl('https://www.way2automation.com/angularjs-protractor/registeration/#/')
	// },

	// 'Demo logout test from way2automation': (browser) => {
	// 	const loginClass = new loginPage(browser);

	// 	loginClass.getUrl(browser.globals.baseUrl[1]);
	// 	loginClass.login('way2automation', 'angular', 'password', 'Krzysiek');

	// 	loginClass.assertElemVisible('.ng-scope');

	// 	loginClass.logout()
	// 	loginClass.assertAppUrl(
	// 		'https://www.way2automation.com/angularjs-protractor/registeration/#/'
	// 	);
	// },

	'Demo add product to cart test': (browser) => {
		const mainClass = new mainPage(browser);
		const cartClass = new cartPage(browser);

		mainClass.getUrl('https://skleptest.pl/');
		mainClass.addToCart()
		mainClass.checkProductBtnCost()
		mainClass.goToCartPage()
		cartClass.checkProductPrice()
	},
};
