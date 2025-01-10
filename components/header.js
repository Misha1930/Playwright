class Header {
    constructor(page){
        this.page = page;
        this.accountButton = page.locator('.styles_userToolsToggler__c2aHe');
        this.enterButton = page.locator('button[data-testid=loginButton]')
        this.searchFieldInput = page.locator('#catalogSearch')
        this.catalogeButton = page.locator('.styles_catalogButton__z9L_j')

    }

    async clickAccountButton(){
        await this.accountButton.click()
    }

    async clickEnterButton(){
        await this.enterButton.click();
    }

    async SearchValue(item){
        await this.searchField.click();
        await this.searchField.fill(item);
        await this.page.keyboard.down('Enter');
    }

    async clickCatalogeOfGoodsButton(){
        await this.catalogeButton.click()
    }
}

module.exports = Header;