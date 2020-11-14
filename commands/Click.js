exports.command = function (selector, message = `Entered selector: ${selector} into the field: ${selector}`) {
    return this
        .waitForElementVisible(selector)
        .click(selector)
}