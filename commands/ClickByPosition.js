const logger = require('../configuration/logger/log4js.js').logAll


module.exports.command = function (selector, position, message = `Element on position ${position} from list ${selector} was clicked.`) {
	return this
		.FindElements('css selector', selector, (elements) => {

			this.elementIdClick(elements.value[position - 1].ELEMENT, () => {
				this.Log(message)
			})
		})
}