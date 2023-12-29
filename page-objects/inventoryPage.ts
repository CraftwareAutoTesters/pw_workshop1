import { Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./basePage"

export class InventoryPage extends BasePage{
    readonly item4Field: Locator

    constructor (page: Page) {
        super(page)
        this.item4Field = page.locator('#item_4_title_link')
    }

    async verifyInventoryPage() {
        expect(this.item4Field).toHaveText('Sauce Labs Backpack')
    }

    async addToCart(itemName: string) {
        
    }
}