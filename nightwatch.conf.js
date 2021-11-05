const packageJson = require('./package.json');
const screenshotPath = './screenshots/' + packageJson.version + '/';

const config = {
	src_folders: ['tests/multiformTests.js'], // 'tests'
	output_folder: './reports/',
	custom_commands_path: './commands/',
	custom_assertions_path: './assertions/',
	globals_path: './configuration/globals.js',

	webdriver: {
		start_process: true,
		port: 4444,
		server_path: require('chromedriver').path,
		log_path: './reports/logs/',
		cli_args: [],
	},

	// selenium: {
	// 	start_process: true,
	// 	server_path: require('selenium-server').path,
	// 	log_path: './reports/logs/',
	// 	host: 'localhost',
	// 	port: 4444,
	// 	cli_args: {
	// 		// 'webdriver.chrome.driver': require('chromedriver').path,
	// 		'webdriver.gecko.driver': require('geckodriver').path,
	// 	},
	// },

	// "test_workers": {
	//   "enabled": true,
	//   "workers": 2 / auto
	// },

	test_settings: {
		default: {
			silent: true,
			disable_colors: false,
			screenshots: {
				enabled: true,
				on_failure: true,
				on_error: true,
				path: screenshotPath,
			},
			end_session_on_fail: true,
			silent: true,
			skip_testcases_on_fail: false,
			end_session_on_fail: true,
			desiredCapabilities: {
				browserName: 'chrome',
				marionette: false,
				javascriptEnabled: false,
				acceptSslCerts: false,
			},
		},

		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				chromeOptions: {
					// w3c: true,
					args: ['start-maximized'],
				},
				javascriptEnabled: true,
				marionette: true,
				acceptSslCerts: true,
				acceptInsecureCerts: true,
			},
		},

		chrome_headless: {
			desiredCapabilities: {
				browserName: 'chrome',
				chromeOptions: {
					// w3c: true,
					mobileEmulation: {
						deviceName: 'iPhone X',
					},
					args: ['headless', 'start-maximized'],
				},
				javascriptEnabled: true,
				marionette: true,
				acceptSslCerts: true,
				acceptInsecureCerts: true,
			},
		},

		iphonex: {
			desiredCapabilities: {
				browserName: 'chrome',
				chromeOptions: {
					// w3c: true,
					mobileEmulation: {
						deviceName: 'iPhone X',
					},
					args: [],
				},
				javascriptEnabled: true,
				marionette: true,
				acceptSslCerts: true,
				acceptInsecureCerts: true,
			},
		},

		// firefox: {
		//   desiredCapabilities: {
		//     browserName: 'firefox',
		//     'moz:firefoxOptions': {
		//       args: ['-maximize'],
		//     },
		//     javascriptEnabled: true,
		//     marionette: true,
		//     acceptSslCerts: true,
		//     acceptInsecureCerts: true,
		//   },
		// },
	},
};

module.exports = config;
