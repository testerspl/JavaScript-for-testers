const testBaseSelectors = require('./testBaseSelectors');
const baseMethods = require('../baseMethods.js').BaseMethods;
const utils = require('../../utils/exampleUtils.js').Utils;

class TestBasePage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	clickAddOption() {
		element('#content > article > nav > ul > div > a').click();

		return this;
	}

	fillTestForm() {
		element(
			'#content > article > nav > ul > div > div > ul > li:nth-child(2) > a'
		).click();
		element('#name').sendKeys(new utils().randomString(255));
		element('#description').sendKeys(new utils().randomString(200));
		element('#result').sendKeys(new utils().randomString(40));
		element('#add').click();

		return this;
	}

	checkAddTestToTestBase() {
		browser.expect.element('#j_info_box').to.be.visible;
		browser.expect
			.element('#j_info_box')
			.text.to.equal('Przypadek testowy został dodany.');

		return this;
	}
}

module.exports.testBasePage = TestBasePage;
