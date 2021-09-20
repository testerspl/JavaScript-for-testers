class BaseMethods {
	constructor(browser) {
		this.browser = browser;
	}

	getUrl(
		url = this.browser.globals.baseUrl[0],
		message = 'The url is correct'
	) {
		this.browser.url(url).assert.urlContains(url).Log(message);

		return this;
	}

	getTextData(selector, callback) {
		this.browser.pause(5000);
		this.browser.element('css selector', selector, (ele) => {
			this.browser.elementIdText(Object.values(ele.value)[0], callback);
		});
	}

	getTxtFromElement(
		selector = '',
		callback = (text) => {
			this.browser.Log(text.value);
		}
	) {
		this.browser.getText(selector, callback);
		return this;
	}

	checkText(selector, assertText) {
		this.getTxtFromElement(selector, (text) => {
			browser.assert.strictEqual(text.value, assertText);
		});
	}
}

module.exports.BaseMethods = BaseMethods;
