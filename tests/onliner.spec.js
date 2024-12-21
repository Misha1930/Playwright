const { test, expect } = require('@playwright/test');
const { before } = require('node:test');
const HomePage = require('../pageObjects/homePage');
const LoginPage = require('../pageObjects/loginPage')
const { ERROR_NOTIFICATION } = require('../helpers/constants');

let homePage;
let loginPage;



test.beforeEach( async ({page})=> {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
})

   
test ("Login page test", async({page}) => {  
           // await page.pause()

            await homePage.navigate('https://www.onliner.by/');
            await expect(page).toHaveTitle(/Onlíner/);
            await homePage.loginButtonClick();
            await loginPage.login('Arnold', 'Password1');
    
            //const response = await page.goto('https://www.onliner.by/login')
            //expect(response.status()).toBe(400)
            //const errorMessage = page.locator('//*[@id="auth-container"]/div/div[2]/div/form/div[3]/div').textContent()
           
        })
    