class BaseMethods {
	constructor(browser) {
		this.browser = browser;
	}

	getUrl(
		url = this.browser.globals.baseUrl[0],
		title = 'TestArena Demo',
		message = 'The url is correct'
	) {
		this.browser.url(url).assert.title(title).Log(message);

		return this;
	}

	getTextData(selector, callback) {
		this.browser.element('css selector', selector, (ele) => {
			this.browser.elementIdText(ele.value.ELEMENT, callback);
		});
	}
}

module.exports.BaseMethods = BaseMethods;
