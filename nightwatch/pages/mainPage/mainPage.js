const mainPageSelectors = require('./mainPageSelectors.js');
const baseMethods = require('../baseMethods.js').BaseMethods;

class MainPage extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	getPopularTrainingsElems(callback) {
		const popular1 = element({
			selector: 'col-12 p-3',
			index: 5,
		});

		const popular2 = element({
			selector: 'col-12 p-3',
			index: 8,
		});

		callback(userNameValid);
	}

	cookieLaw() {
		element(mainPageSelectors.cookieModal).click();

		new ApiClass().getSms();
		return this;
	}

	checkPromoArticles() {
		this.browser.assert.visible(mainPageSelectors.promoDiv);

		return this;
	}

	checkSocialMedia() {
		this.browser.assert.visible(mainPageSelectors.stayUpdatedFB);
		this.browser.assert.visible(mainPageSelectors.stayUpdatedInstagram);
		this.browser.assert.visible(mainPageSelectors.stayUpdatedTwit);
		this.browser.assert.visible(mainPageSelectors.stayUpdatedYoutube);

		return this;
	}
	checkPopularTrainings() {}
}

module.exports.mainPage = MainPage;

// browser.element.findByText('group of people');

// export default {
// 	demoTest(browser: NightwatchAPI): void {
// 	  // Search by the substring matching.
// 	  const inputs = browser.element.findByText('group of people');

// 	  // Search for the exact occurrence.
// 	  const images = browser.element.findByText(
// 		'The nostalgic office',
// 		{ exact: true }
// 	  );
// 	}
//   }

// browser.element.findAllByText('group of people');

// export default {
// 	demoTest(browser: NightwatchAPI): void {
// 	  // Search by the substring matching.
// 	  const inputs = browser.element.findAllByText('group of people');

// 	  // Search for the exact occurrence.
// 	  const images = browser.element.findAllByText(
// 		'The nostalgic office',
// 		{ exact: true }
// 	  );
// 	}
//   }

// browser.element.findAll('button.submit-form');

// export default {
// 	async demoTest(browser: NightwatchAPI): Promise<void> {
// 	  const buttonsElement = browser.element.findAll('button.submit-form');

// 	  // Get an array of found elements.
// 	  const buttons = await buttonsElement;

// 	  // Use an object to customise locating behaviour.
// 	  const sections = browser.element
// 		.findAll({ selector: 'section', locateStrategy: 'css selector' });
// 	}
//   }
