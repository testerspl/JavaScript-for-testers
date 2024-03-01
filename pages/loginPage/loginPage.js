const loginPageSelectors = require('./loginPageSelectors');
const basePage = require('../basePage.js').BasePage;

// Przykład np dla narzędzia Cypress
// import basePage from '../basePage'

class LoginPage extends basePage {
	// Jeżeli w klasie dziedziczonej jest konstruktor z parametrem
	// to dodajemy słowo super z dodanie
	constructor(browser) {
		super(browser);
	}

	login(appName, email = 'administrator@testarena.pl', pass = 'sumXQQ72$L', username = 'Krzysiek') {
	
        let sendLoginAndPass = (loginSelector, passSelector) => {
            element(loginSelector).sendKeys(email);
            element(passSelector).sendKeys(pass);
        }


		if (appName === 'way2automation') {
			browser.assert.urlEquals(browser.globals.baseUrl[1]);
            sendLoginAndPass(loginPageSelectors.usernameOne, loginPageSelectors.passTwo)
            element(loginPageSelectors.usernameTwo).sendKeys(username);
         
		} else if(appName === 'testArena') {
            sendLoginAndPass(loginPageSelectors.email, loginPageSelectors.passOne)
        } else {
            
        }



        appName === 'way2automation' ? element(loginPageSelectors.loginBtnTwo).click() : element(loginPageSelectors.loginBtnOne).click()
	}

    getMainPageHeader() {
        return loginPageSelectors.header
    }

    logout() {
        element(loginPageSelectors.logoutBtn).click()
    }
}

module.exports.LoginPage = LoginPage;
