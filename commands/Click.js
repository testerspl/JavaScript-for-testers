exports.command = function (
	selector,
	message = `Clicked on element with selector: ${selector}`
) {
	return this.waitForElementVisible(selector).click(selector).Log(message);
};
