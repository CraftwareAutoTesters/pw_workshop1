import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})

test.describe('Ogolnie lokatory', () => {

test('Lokatory', async ({page}) => {
    //By tag name
    const firstInput = page.locator('input').first()
    await firstInput.fill('Test')

    //By ID
    await page.locator('#user-name').clear()

    //By class
    await page.locator('.input_error').first().fill('Test2')

    //attribute
    await page.locator('[data-test="username"]').clear()

    //full class name
    await page.locator('[class="input_error form_input"]').fill('Test3')

    //xpath
    await page.locator('//*[@id="user-name"]').clear()

    //by partial text match
    await page.locator(':text("Swag")').click()

    //by exact text match
    page.locator(':text-is("Swag Labs")')
})

test('User facing locators', async ({page}) => {
    // https://playwright.dev/docs/best-practices#best-practices
    await page.getByRole('textbox', {name: "Username"}).fill("test5")
    await page.getByRole('button', {name: "Login"}).click()
})

test('Parent locators', async ({page}) => {
    await page.locator('#login_credentials', {hasText: "Accepted usernames are:"}).click()
    //await page.locator('#login_credentials').filter({has: page.locator(':text("standard_user")')}).click()
    const loginCred = page.locator('#login_credentials')
    
    await page.locator('.login-box').locator('..').click()
})

test('Reusing locators', async ({page}) => {
    const emailForm = page.locator('#user-name')

    await emailForm.click()
})

})

test('Asercje', async ({page}) => {
    //test.slow()
    test.setTimeout(10000)
    const emailForm = page.locator('#user-name')
    const passwordForm = page.locator('#password')
    const loginButton = page.locator('#login-button')

    await emailForm.pressSequentially('standard_user', {delay: 500})
    await passwordForm.fill('secret_sauce')
    expect.soft(await emailForm.inputValue()).toEqual('standard_user2')
    await loginButton.click({timeout: 16000})
    page.waitForLoadState('networkidle')
})