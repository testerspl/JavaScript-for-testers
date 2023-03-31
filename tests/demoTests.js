module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	'Demo login test to test arena': (browser) => {
		browser.url('http://demo.testarena.pl/zaloguj');

		element('#email').sendKeys('administrator@testarena.pl');
		element('#password').sendKeys('sumXQQ72$L');
		element('#login').click();
		browser.expect.url().to.contain('demo.testarena.pl/');
	},
};
