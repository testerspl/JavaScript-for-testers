exports.command = function (
	locatorType = 'css selector',
	selector,
	callback,
	message = `Grabing text from element ${selector} on the web page`
) {
	return this.element(locatorType, selector, function (element) {
		this.Log(message).elementIdText(element.value.ELEMENT, callback);
	});
};
