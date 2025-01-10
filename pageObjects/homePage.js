const BasePage = require("./basePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
        this.cookieModal = page.locator('#modal-cookie');
        this.closeCookieModalButton = page.locator('//button[@class="Button-module__button Button-module__blue-primary"]');
        this.accountButton = page.locator("#userbar > div:nth-child(2) > div > div > div.auth-bar__item.auth-bar__item--text");
        
    }
        async loginButtonClick(){
            await this.loginButton.click()
        }
        async clickCloseCookieModalButton() {
            await this.closeCookieModalButton.click();
          }
        
          async clickClosePromoPopupModalButton() {
            await this.closePromoPopupModalButton.click();
          }
}

module.exports = HomePage;