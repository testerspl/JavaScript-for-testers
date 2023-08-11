const logger = require('../configuration/logger/log4js.js').logAll;

exports.command = function (
	locatorType = 'css selector',
	selector,
	callback,
	message = `The element: ${selector} was correctly located on the page`
) {
	return new Promise((resolve) => {
		resolve(this.Log(message));
	})
        .then(this.element(locatorType, selector, callback))
		.catch((err) => logger.error(err));
};
