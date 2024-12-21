const BasePage = require("./basePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.loginButton = page.locator("#userbar > div:nth-child(2) > div > div > div.auth-bar__item.auth-bar__item--text");
    }
        async loginButtonClick(){
            await this.loginButton.click()
        }
}

module.exports = HomePage;