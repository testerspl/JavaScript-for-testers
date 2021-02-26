const logger = require('../configuration/logger/log4js.js').logAll;

module.exports.command = function (message) {
	return this.perform((browser, done) => {
		console.log('\u{1b}\u{1b}[0;33m \u24D8 \u{1b}[0m' + message);
		done();
	});
};
