module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo test': (browser) => {
		browser.url(
			'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
		);

		browser.assert.titleEquals('Protractor practice website - Registration');
	},
};
