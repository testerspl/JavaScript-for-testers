
module.exports.command = function (elementSelector = '', elemLocateStrategy = 'css selector', elementPosition = 0) {
	return this.element
    .findAll({ selector: elementSelector, locateStrategy: elemLocateStrategy  }).then((elements)=> { // elements jest tablicą zawierającą elementy strony
        browser.element(elements[elementPosition]).click()
    })
};



