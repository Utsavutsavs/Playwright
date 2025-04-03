const {test,expect} = require ('playwright/test');


test("KLM scenario" , async ({page})=>{

    await page.goto("https://www.klm.co.in/");
    await page.locator("[placeholder='Departing from']").fill("Delhi");
    expect(page).toHaveTitle("KLM royal")




})