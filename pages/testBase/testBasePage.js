const testBaseSelectors = require('./testBaseSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class TestBasePage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	fillForm(formName, description, result) {
		element(testBaseSelectors.formName).sendKeys(formName);
		element(testBaseSelectors.formDsc).sendKeys(description);
		element(testBaseSelectors.formRes).sendKeys(result);
		element(testBaseSelectors.formSave).click();
	}

	searchTest(testName) {
		element(testBaseSelectors.searchTest).sendKeys(testName);
		element(testBaseSelectors.searchBtn).click();
	}

	checkIfTestIsVisible() {
		this.assertElemVisible(testBaseSelectors.testNameAtList);
	}
}

module.exports.TestBasePage = TestBasePage;
