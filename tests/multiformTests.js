const submitPage = require('../pages/multiform/multiformPage').MultiformPage;
const logger = require('../configuration/logger/log4js.js').logAll;
const multiformSelectors = require('../pages/multiform/multiformSelectors.js');

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo multiform test': (browser) => {
		new submitPage(browser)
			.getUrl(browser.globals.baseUrl[1])
			.clickProfile()
			.submitProfile()
			.consoleChoice()
			.clickSubmitBtn();
		browser.pause(2000).getText(multiformSelectors.testCompleteText,
            
            
            (text) => {
			browser.assert.strictEqual(text.value, 'Test Completed, WooHoo!')

		});
		


	},
};
