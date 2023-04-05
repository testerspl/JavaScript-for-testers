const testBaseSelectors = require('./testBaseSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class TestBasePage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	goToAddTest() {
		element(testBaseSelectors.add).click();
		// element({
		// 	selector: testBaseSelectors.testCase,
		// 	element: 1,
		// }).click();
		this.browser.click('link text', 'Przypadek testowy')
		
		return this;
	}


	fillForm(formName, description, result, test = 'testCase') {

		if(test === 'testCase') {

			element({
				selector: testBaseSelectors.formName,
				element: 0,
			}).sendKeys(formName);
			element(testBaseSelectors.formDsc).sendKeys(description);
			element(testBaseSelectors.formRes).sendKeys(result);
		} else if(test = 'automationTest') {
			element({
				selector: testBaseSelectors.formName,
				element: 0,
			}).sendKeys(formName);
			element(testBaseSelectors.formDsc).sendKeys(description);
		} else {
			throw Error('Moje błędy przy dodaniu testu')
		}

		element(testBaseSelectors.formSave).click();

		return this;
	}

	checkAddTest() {
		this.browser.expect.url().to.contain('/wp1/tests');
		this.assertElemVisible(testBaseSelectors.infoBox);
		this.browser.expect
			.element(testBaseSelectors.infoBox)
			.text.to.contain('Przypadek testowy został dodany.');

		return this;
	}

	searchTest(testName) {
		element(testBaseSelectors.searchTest).sendKeys(testName);
		element(testBaseSelectors.searchBtn).click();

		return this;
	}
}

module.exports.TestBasePage = TestBasePage;
