module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	beforeEach: function (browser) {
		browser.windowMaximize();
		browser.url(browser.globals.baseUrl[1]);
	},

	// 'Demo login test to test arena': (browser) => {
	// 	// browser.url('http://demo.testarena.pl/zaloguj');

	// 	element('#email').sendKeys('administrator@testarena.pl');
	// 	element('#password').sendKeys('sumXQQ72$L');
	// 	element('#login').click();

	// 	browser.expect.url().to.contain('demo.testarena.pl/');
	// },

	// // id oznaczamy #
	// // Klasę css oznaczamy .
	// // dla klasy css spacje zamieniamy na .
	// 'Demo logout test': (browser) => {
	// 	element('#email').sendKeys('administrator@testarena.pl');
	// 	element('#password').sendKeys('sumXQQ72$L');
	// 	element('#login').click();

	// 	element('.icons-switch').click()

	// 	browser.expect.element('#text-2 > div > form').to.be.visible;
	// },

	// 'Demo log-in test': (browser) => {

	// 	element('#username').sendKeys('angular');
	// 	element('#password').sendKeys('password');
	// 	element('#formly_1_input_username_0').sendKeys('Krzysztof');

	// 	element('.btn.btn-danger').click();

	// 	browser.expect.url().to.contain('/angularjs-protractor/registeration/#/');
	// 	browser.expect.element(
	// 		'body > div.jumbotron > div > div > div > p:nth-child(3)'
	// 	).to.be.visible;
	// 	browser.expect
	// 		.element('body > div.jumbotron > div > div > div > p:nth-child(2)')
	// 		.text.to.contain("You're logged in!!");
	// },

	'Demo validation test': (browser) => {
		const userNameValid = element({
			selector: '.ng-scope',
			index: 3,
		});

		const passNameValid = element({
			selector: '.ng-scope',
			index: 4,
		});

		element('#username').sendKeys('angular');
		element('#password').sendKeys('password');
		element('#formly_1_input_username_0').sendKeys('Krzysztof');
		element('#username').clear();
		element('#password').clear();
		element('#formly_1_input_username_0').clear();

		browser.assert.visible(userNameValid);
		browser.assert.visible(passNameValid);
		browser.assert.visible('#formly_1_input_username_0');
		browser.assert.textEquals(userNameValid, 'You did not enter a username');
		browser.assert.textEquals(passNameValid, 'You did not enter a username');
		browser.assert.textEquals(
			'#formly_1_input_username_0_description',
			'username description'
		);
	},
};
