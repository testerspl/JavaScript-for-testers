const util = require('util')
const logger = require('../configuration/logger/log4js.js').logAll


exports.assertion = function (expected, msg) {

	this.message = msg || util.format('Testing if the URL equals: "%s".', expected)
	this.expected = expected

	this.pass = function (value) {
		return value === this.expected
	}

	this.value = function (result) {
		return result.value
	}

	this.command = function (callback) {
		this.api.url(callback)

		return this
	}

}