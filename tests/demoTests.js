module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	'Demo login test to test arena': (browser) => {
		browser.url('https://demo.testarena.pl/zaloguj');
		browser.pause(20000)
		element('#email').sendKeys('administrator@testarena.pl');
		element('#password').sendKeys('sumXQQ72$L');
		element('#login').click();

		browser.expect.url().to.contain('demo.testarena.pl/');
	},
};
