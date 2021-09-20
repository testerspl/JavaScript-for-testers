module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo multiform test': (browser) => {
		browser
			.url(
				'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
			)
			.assert.urlContains(
				'www.way2automation.com/angularjs-protractor/registeration/#/login'
			);
	},
};
