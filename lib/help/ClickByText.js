const logger = require('../configuration/logger/log4js.js').logAll


module.exports.command = function (selector, text, message = `Element ${selector} that contains text ${text} was clicked.`) {
	return this
		.elements('css selector', selector, items => {
			let found = false
			let lastElement = false

			for (let i = 0; i < items.value.length; i++) {
				this.elementIdText(items.value[i].ELEMENT, res => {
					if (res.value === text) {
						found = true
						this.elementIdClick(items.value[i].ELEMENT, () => {
							this.Log(message)
							return this
						})
					}

					if (i === (items.value.length - 1)) lastElement = true
				}).perform(function () {
					if (lastElement && !found) this.client.api.LogError(`Element with text ${text} is not on list with selector ${selector}.`)
				})
			}
		})
}