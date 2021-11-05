const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo multiform test': (browser) => {
		browser
			.url(
				'https://www.way2automation.com/angularjs-protractor/multiform/#/form/profile'
			)
		


			
		browser.assert.title('Protractor practice website - Multiform');
		
	},

	// 'Demo login test': (browser) => {
	// 	browser.url(
	// 		'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
	// 	);
	// 	new loginPage().login();

	// 	browser.assert.title('Protractor practice website - Registration');
	// },

	// 'Demo logout test': (browser) => {
	// 	browser
	// 		.url(
	// 			'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
	// 		)

	// 		.clearValue('#username')
	// 		.setValue('#username', 'angular')
	// 		.clearValue('#password')
	// 		.setValue('#password', 'password')
	// 		.clearValue('#formly_1_input_username_0')
	// 		.setValue('#formly_1_input_username_0', 'Przykładowy użytkownik')

	// 		.click('.btn.btn-danger');

	// 	if (browser.assert.containsText('.ng-scope', 'Home')) {
	// 		browser
	// 			.click('p.ng-scope:nth-child(3) > a:nth-child(1)')
	// 			// .pause(5000)
	// 			.assert.urlContains(
	// 				'www.way2automation.com/angularjs-protractor/registeration/#/login'
	// 			);
	// 	}
	// },
};
