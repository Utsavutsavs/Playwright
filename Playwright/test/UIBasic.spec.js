import {test, expect} from  '@playwright/test'

test('First Test case',async({page})=>{

// const launchbrowser = browser.newContext();
// const page = await launchbrowser.newPage();

await page.goto("https://rahulshettyacademy.com/");

})

test('Second Test case' , async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator("#username").fill("Coforge");
    await page.locator("#password").fill("Password");
    await page.locator("#signInBtn").click();
    const errormessage = await page.locator("[style*='block']").innerText();
    expect (errormessage).toBe("Incorrect username/password.");
    //console.log(errormessage);
   


})