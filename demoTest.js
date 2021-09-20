module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo multiform test': (browser) => {
		browser
			.url(browser.globals.baseUrl[0])
			.assert.urlContains(browser.globals.baseUrl[0]);
	},
};
