import { Locator, Page } from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

    constructor (page: Page) {
        this.page = page
        this.usernameField = page.locator('#user-name')
        this.passwordField = page.getByRole('textbox', {name: "Password"})
        this.loginButton = page.locator('#login-button')
    }

    async loginAs(user: string) {
        await this.usernameField.fill(user)
        await this.passwordField.fill("secret_sauce")
        await this.page.screenshot({path: 'screenshots/beforeLogin.png'})
        await this.loginButton.click()
    }

}