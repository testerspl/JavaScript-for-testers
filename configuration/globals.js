module.exports = {


  // before(cb) {
  //     console.log(process.argv)
  //     cb();
  //   },

  // beforeEach(browser, cb) {


  //   cb()
  // },

  //   after(cb) {
  //     console.log('GLOBAL AFTER')
  //     cb();
  //   },

  // afterEach(browser) {
  //   browser.perform(function () {
  //     console.log('GLOBAL afterEach')
  //     browser.end()
  //   })
  // },

  baseUrl: ['http://demo.testarena.pl/zaloguj'],

  abortOnAssertionFailure: true,
  waitForConditionPollInterval: 500,
  waitForConditionTimeout: 2000,
  retryAssertionTimeout: 2000,
  throwOnMultipleElementsReturned: false,
  
}