const { test, expect } = require('@playwright/test');
const { before } = require('node:test');
const HomePage = require('..//..//pageObjects/homePage');
const Header = require ('..//..//components/header');
const LoginModal = require('..//..//components/loginModal');
const {errorMessage} = require('..//..//utils/errorMessages');
const {credentials} = require('..//..//utils/credentials');




test.describe('Login test of 21vek', ()=>{
    let homePage;
    let header;
    let loginModal;

    test.beforeEach( async ({page})=> {
        homePage = new HomePage(page);
        header = new Header(page);
        loginModal = new LoginModal(page);
        await homePage.navigate('https://www.21vek.by/');
        await expect(homePage.cookieModal).toBeVisible();
        await homePage.clickCloseCookieModalButton();
        await expect(homePage.cookieModal).toBeHidden();
        await header.clickAccountButton();
        await header.clickEnterButton();
    })

    test("LogIn with valid credentials", async ()=>{
        await loginModal.signIn(credentials.validEmail, credentials.validPassword);
    })

    test("LogIn with invalid credentials", async()=>{
        
    })
})





    