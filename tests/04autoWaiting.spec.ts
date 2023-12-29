import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test('Auto waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')
    //await successButton.click() //timeout domyślny

    //const text = await successButton.textContent() //timeout domyślny
    //await successButton.waitFor({state: "attached"}) //bo nie ma auto waita, ale mozemy poczekać ręcznie najpierw
    //const text = await successButton.allTextContents() //nie ma auto waita
    //expect(text).toContain('Data loaded with AJAX get request.') //jak alltextcontesnts - bo zwraca listę

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000}) //await z automatu ma 5 sekund, ale możemy nadpisać
})

test('alternative waits', async ({page}) => {
    const successButton = page.locator('.bg-success')

    // wait for element
    //await page.waitForSelector('.bg-success')

    //wait for particular response
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait for network calls to be completed (not recommended)
    await page.waitForLoadState('networkidle') //wszystkie requesty się zakończą na stronie

    const text = await successButton.allTextContents() //nie ma auto waita
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('timeout', async ({page}) => {
    test.setTimeout(10000) //ograniczamy/wydluzamy czas tylko tego jednego testu z defaultu
    test.slow() //trzykrotnie wydluzamy default timeout dla testu
    const successButton = page.locator('.bg-success')
    await successButton.click({timeout: 16000})
})


//Timeouts
// Global timeout - default - no
// Test timeout - 30000 ms limit for single test
    //Action timeout - no default
    //navigation timeout - no default
    //expect timeout - 5000 ms
    //do ustawienia w configu!