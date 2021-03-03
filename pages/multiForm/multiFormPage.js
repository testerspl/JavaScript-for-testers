const baseMethods = require('../baseMethods.js').BaseMethods;
const multiFormSelectors = require('./multiFormSelectors');

class MultiForm extends baseMethods {
	constructor(browser) {
		super(browser);
	}

	formAction(
		stepOneSelector = multiFormSelectors.profile,
		name = 'Krzysztof',
		nameSelector = multiFormSelectors.name,
		email = 'example@gmail.com',
		emailSelector = multiFormSelectors.email,
		nextBtnSelector = multiFormSelectors.nextBtn
	) {
		this.browser
			.click(stepOneSelector)
			.setValue(nameSelector, name)
			.setValue(emailSelector, email)
			.click(nextBtnSelector);

		return this;
	}
}
module.exports.MultiForm = MultiForm;
