const loginPage = require('../pages/loginPage/loginPage.js').LoginPage;

module.exports = {

	afterEach : function(browser, done) {
		browser.end(function(){
			done()
		});
		
	  },

	  after: function () {
		process.exit();
	  },


	'Demo login test': function (browser) {
		let login = new loginPage(browser);

		login.getUrl()

	},
};
