import {test, expect} from  '@playwright/test';


test.only("Ecommerce scenario" ,  async ({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.locator(".a-size-small.a-color-base.truncate-2line").last().waitFor();
    const textContent= await page.locator('.a-size-small.a-color-base.truncate-2line').allTextContents();
    console.log("Text content of the first element: ", textContent);
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
 
// dropdown scenario
    const Searchdropdown = await page.locator("#searchDropdownBox");
    await Searchdropdown.selectOption("Amazon Devices");

//search and checkbox validation
   await page.locator("#twotabsearchtextbox").fill("Iphone");
   await page.locator("#nav-search-submit-button").click();
   await page.locator("text='Any Department'").click();
   await page.locator("a[aria-label*='the filter Get It Today'] label i").click();
   const response = await page.locator("a[aria-label*='the filter Get It Today'] label i").isChecked();
   console.log(response);
   await expect(page.locator("a[aria-label*='the filter Get It Today'] label i")).toBeChecked();
   await page.locator("a[aria-label*='the filter Get It Today'] label i").nth(0).uncheck();
   const responses = await page.locator("a[aria-label*='the filter Get It Today'] label i").nth(0).isChecked();
   console.log(responses);

})