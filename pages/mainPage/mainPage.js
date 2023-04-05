const mainSelectors = require('./mainPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class MainPage extends baseMethods {
	
	constructor(browser) {
		super(browser)
	}

	logOut() {

		// this.getUrl('url')
		element('.icons-switch.icon-20').click();
	}
















	checkMainPageElements() {
		this.browser.expect.url().to.contain('demo.testarena.pl/');
		this.browser.expect.element(mainSelectors.myTasksOne).to.be.visible;
		this.browser.expect.element(mainSelectors.myTasksTwo).to.be.visible;
		this.browser.expect.element(mainSelectors.myTasksThree).to.be.visible;
		this.browser.expect.element(mainSelectors.taskEndTime).to.be.visible;
		this.browser.expect.element(mainSelectors.lastMsg).to.be.visible;

		return this;
	}

	clickTestBaseMenuOption() {
		element(mainSelectors.testBaseMenuOpt).click();

		return this;
	}
}

module.exports.MainPage = MainPage;
