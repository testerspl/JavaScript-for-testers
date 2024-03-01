module.exports = {
	// before(cb) {
	//     console.log(process.argv)
	//     cb();
	//   },

	// beforeEach(browser, cb) {

	//   cb()
	// },

	after(cb) {
		//     console.log('GLOBAL AFTER')
		//     cb();
		process.exit();
	},

	// afterEach(browser) {
	//   browser.perform(function () {
	//     console.log('GLOBAL afterEach')
	//     browser.end()
	//   })
	// },

	baseUrl: [
		'https://demo.testarena.pl/zaloguj',
		'https://www.way2automation.com/angularjs-protractor/registeration/#/login',
		'https://www.way2automation.com/angularjs-protractor/multiform/#/form/profile',
		'http://www.way2automation.com/angularjs-protractor/webtables/',
	],

	abortOnAssertionFailure: true,
	waitForConditionPollInterval: 3000,
	waitForConditionTimeout: 30000,
	retryAssertionTimeout: 1000,
	throwOnMultipleElementsReturned: false,
	asyncHookTimeout: 30000,
};
