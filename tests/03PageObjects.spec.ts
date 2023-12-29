import {expect, test} from '@playwright/test'
import { LoginPage } from '../page-objects/loginPage'
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})

test.only('Log as standard user @smoke @integration', async ({page}) => {
    const pm = new PageManager(page)
    await pm.loginPage.loginAs("standard_user")
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await pm.inventoryPage.verifyInventoryPage()
    await pm.inventoryPage.item4Field.screenshot({path: 'screenshots/inventoryField.png'})
    await expect(pm.inventoryPage.item4Field).toHaveScreenshot()
})