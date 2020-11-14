class BaseMethods {
	constructor(browser) {
		this.browser = browser;
	}

	getUrl(
		url = 'http://demo.testarena.pl/zaloguj',
		title = 'TestArena Demo',
		message = 'Poprawna strona'
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
