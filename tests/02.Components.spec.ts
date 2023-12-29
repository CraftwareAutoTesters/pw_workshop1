import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.globalsqa.com/samplepagetest/')
})

test('checkboxes', async({page}) => {
    const checkbox01Field = page.getByRole('checkbox', {name: "Functional Testing"})

    await checkbox01Field.click()
    await checkbox01Field.uncheck()
    await checkbox01Field.check()

    const allCheckboxes = page.getByRole('checkbox')

    for (const box of await allCheckboxes.all()) {
        await box.check()
        expect(await box.isChecked()).toBeTruthy()
    }
})

//dropdowns
// page.getByRole('list') - kiedy lista ma Ul tag
// page.getByRole('listitem') - kiedy na liście są Li tagi