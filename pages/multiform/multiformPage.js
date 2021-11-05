const multiformSelectors = require('./multiformSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class MultiformPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	clickSubmitBtn() {
		this.browser.click(multiformSelectors.nextBtn);
	}

	submitProfile(callback) {
		this.browser.setValue(multiformSelectors.name, 'angular');
		this.browser.setValue(multiformSelectors.email, 'password');

		this.clickSubmitBtn();

		return this;
	}

	getMultiformText(
		textElemSelector = multiformSelectors.testCompleteText,
		callback
	) {
		this.browser.getText(textElemSelector, callback);

		return this;
	}

	clickProfile() {
		this.browser.click(multiformSelectors.profile);

		return this;
	}

	consoleChoice(console = 'ps4') {
		if (console === 'ps4') {
			this.browser.click(multiformSelectors.psx);
		} else if (console === 'xbox') {
			this.browser.click(multiformSelectors.xbox);
		} else {
			throw Error('Console ERROR');
		}

		return this;
	}
}

module.exports.MultiformPage = MultiformPage;
