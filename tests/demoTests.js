module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo login test': (browser) => {
		browser.url(
			'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
		);

		element('#username').sendKeys('angular');
		element('#password').sendKeys('password');
		element('#formly_1_input_username_0').sendKeys('angular');

		browser.assert.titleEquals('Protractor practice website - Registration');
	},
};
