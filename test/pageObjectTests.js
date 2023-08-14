const mainPage = require('../nightwatch/pages/mainPage/mainPage.js').mainPage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	beforeEach: function (browser) {
		browser.windowMaximize();
		browser.url('https://testerzy.pl/');
	},

	// 'Check Promo Articles Div': (browser) => {
	//     // 1 sposób na wskazanie referencji do klasy
	// 	// const mainPage = new MainPage(browser);

	// 	new mainPage(browser).checkPromoArticles();
	// },

	'Check stay updated media': (browser = 'chrome') => {
       
		new mainPage(browser).cookieLaw()


		browser.pause(10000)


		new mainPage(browser).checkPopularTrainings();
	},
};
