

class BasePage {

  constructor(browser) {
    this.browser = browser
  }


  getUrl(url, msg = 'This url is correct') {

    this.browser.url(url).assert.urlContains(url).Log(msg)

  }

  assertElemVisible(selector) {
		this.browser.assert.visible(selector);
	}
}