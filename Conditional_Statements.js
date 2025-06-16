// if(5>3){
//     console.log("Umashankar")
// }else{
//     console.log("king")
// }

// if(3>5){
//     console.log("Umashankar")
// }else{
//     console.log("king")
// }

// x=20
// y=10
// z=30
// if(x<y){
//     console.log("Condition1")
// }
// else if(z>x){
//     console.log("condition2")
// }
// else{
//     console.log("User")
// }
//console.log("******************************************************************************************")
// SWITCH:
//NOTE--In switch if we remove 'Break' it will run reaming/next code/cases also 
// var X = "Monday"
//     X = "Tuesday"
// switch (X) {
//     case "sunday":
//         console.log("X value is sunday")
//         break;
//     case "Monday":
//         console.log("X value is Monday")
//         break;
//     case "Tuesday":
//         console.log("X value is Tuesday")
//         break;
//     case "Wednesday":
//         console.log("X value is Wednesday")
//         break;
//     case "Tuesday":
//         console.log("X value is Tuesday")
// }
//-------------------------------------------
import { test, expect } from '@playwright/test';
test("Based on BrowserName run different script", async ({ page, browserName }) => {
    switch (browserName) {
        case "chromium":
            await page.goto("https://www.flipkart.com/");
            await page.close()
            break;
        case "firefox":
            await page.goto("https://www.amazon.in/");
            await page.close()
            break;
        case "webkit":
            await page.goto("https://www.myntra.com/");
            await page.close()
            break;
    }
})

test("Based on BrowserName run different script2", async ({ page, browserName }) => {
    if (browserName == "chromium") {
        await page.goto("https://www.flipkart.com/");
        await page.close()
    }
    else if (browserName == "firefox") {
        await page.goto("https://www.amazon.in/");
        await page.close()
    }
    else if (browserName == "webkit") {
        await page.goto("https://www.myntra.com/");
        await page.close()
    }
})
