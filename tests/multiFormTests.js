const multiFormPage = require('../pages/multiForm/multiFormPage').MultiForm;
const logger = require('../configuration/logger/log4js.js').logAll;

module.exports = {
	afterEach: function (browser, done) {
		browser.end(function () {
			done();
		});
	},

	'Demo multiform test': (browser) => {
		new multiFormPage(browser).getUrl(browser.globals.baseUrl[1]).formAction();
	},
};
