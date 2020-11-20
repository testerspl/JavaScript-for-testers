const util = require('util')
const logger = require('../configuration/logger/log4js.js').logAll


exports.assertion = function (expected, msg) {

	this.message = msg || util.format('Testing if the URL contains: "%s".', expected)
	this.expected = expected

	this.pass = function (value) {
		return value.indexOf(this.expected) > -1
	}

	this.value = function (result = {}) {
		return result.value || ''
	}

	this.command = function (callback) {
		this.api
			.pause(2000)
			.url(callback)

		return this
	}
}