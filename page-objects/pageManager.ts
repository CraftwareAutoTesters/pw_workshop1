import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { LoginPage } from "./loginPage";
import { InventoryPage } from "./inventoryPage";

export class PageManager extends BasePage{

    readonly loginPage: LoginPage
    readonly inventoryPage: InventoryPage

    constructor(page: Page) {
        super(page)
        this.loginPage = new LoginPage(page)
        this.inventoryPage = new InventoryPage(page)
    }
}