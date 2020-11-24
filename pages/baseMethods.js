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
			this.browser.elementIdText(ele.value, callback);
		});
	}

	getTxtFromElement(selector, assertText) {
		this.browser.getText(selector, (txt) => {
			this.browser.assert.equal(txt.value, assertText);

			return new Promise((resolve) => {
				resolve(txt);
			});
		});
	}
}

module.exports.BaseMethods = BaseMethods;
