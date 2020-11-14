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
}

module.exports.BaseMethods = BaseMethods;
