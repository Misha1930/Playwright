const { url } = require("inspector");
const HomePage = require("./homePage")

class LoginPage extends HomePage{
 
    constructor(page){
        super(page);
        this.page = page;
        this.loginField = page.locator('[type = "text"].auth-input');
        this.passwordField = page.locator('[type = "password"].auth-input');
        this.submitButton = page.locator('.auth-button.auth-button_subsidiary');
        
    }
        async login(login, password, url) {
            await this.loginField.click();
            await this.loginField.type(login);
            await this.passwordField.click();
            await this.passwordField.fill(password);
            await this.submitButton.click();
        }
    
    }
    

module.exports = LoginPage;

