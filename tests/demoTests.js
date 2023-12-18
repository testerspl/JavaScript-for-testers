module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},
/*
	'Demo login test to test arena': (browser) => {
		browser.url('http://demo.testarena.pl/zaloguj');

		element('#email').sendKeys('administrator@testarena.pl');
		element('#password').sendKeys('sumXQQ72$L');
		element('#login').click();

		browser.expect.url().to.contain('demo.testarena.pl/');
	},

	'Should login to test app': (browser) => {
		browser.url('https://www.saucedemo.com/');



		browser.assert.visible('#shopping_cart_container')
		browser.assert.visible('#react-burger-menu-btn')
	},

	'Should logout from test app': (browser) => {
		browser.url('https://www.saucedemo.com/')

		element('#user-name').sendKeys('standard_user')
		element('#password').sendKeys('secret_sauce')
		element('#login-button').click()

		browser.assert.visible('#shopping_cart_container')
		browser.waitForElementVisible('#react-burger-menu-btn', 1000)

		element('#react-burger-menu-btn').click()
		browser.waitForElementVisible('#logout_sidebar_link', 1000)

		element('#logout_sidebar_link').click()

		browser.expect.url().to.contain('saucedemo.com/')
		browser.assert.visible('#user-name')
		browser.assert.visible('#password')
		
	},

	'Should add a product do cart': (browser) => {
		browser.url('https://www.saucedemo.com/')

		element('#user-name').sendKeys('standard_user')
		element('#password').sendKeys('secret_sauce')
		element('#login-button').click()

		browser.expect.url().to.contain('saucedemo.com/inventory.html')
		browser.assert.visible('#shopping_cart_container')
		element('#add-to-cart-sauce-labs-backpack').click
		element('#shopping_cart_container').click
		browser.waitForElementVisible('#item_4_title_link', 1000)
		//browser.expect.url().to.contain('saucedemo.com/cart.html')	

		browser.assert.visible('#item_4_title_link')
		browser.assert.visible('#remove-sauce-labs-backpack')
		browser.assert.visible('#continue-shopping')
		//browser.assert.visible('#')
		browser.assert.visible('#checkout')
	},
*/
	'Should logout from test app': (browser) => {
		browser.url('https://www.saucedemo.com/');

		element('#user-name').sendKeys('standard_user');
		element('#password').sendKeys('secret_sauce');
		element('#login-button').click();
		browser.assert.visible('#shopping_cart_container');

		browser.getText('#item_4_title_link > div', (result) => {
			element('#add-to-cart-sauce-labs-backpack').click();
			browser.assert.textEquals('.shopping_cart_badge', '1');

			element('.shopping_cart_badge').click();
			
			if(browser.assert.visible('.cart_list')){
				browser.assert.textEquals('.cart_quantity', '1');
				browser.assert.textEquals('.inventory_item_name', result.value);
			}
		});
	},
}
