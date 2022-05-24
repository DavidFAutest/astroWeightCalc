const astroCalc = require('../pageobjects/asteroCalc.page');

describe('My Astro Calc application', () => {
    it('should have the correct h1 element title', async () => {
        await astroCalc.open();

        await expect(astroCalc.h1).toBeExisting();
        await expect(astroCalc.h1).toHaveTextContaining(
            "I'm an Astro Weight Calculator!");
        //For test checking
        // await expect(astroCalc.h1).toHaveTextContaining(
        //     "I'm an Astero Weight Calculator!");
    });
    
    it('should have a select element', async () => {
        await expect(astroCalc.selectElement).toBeExisting();
        // await expect(astroCalc.selectElement).toHaveTextContaining(
        //     '');  //Work on full planet name list later, might be array, feeling extra
    });
    
    
    //This is all Caveman Code, might discover fire later IDK
    it('should someone who weights 150 pounds on earth should should weigh 24.83 lbs on the moon', async () => {
        await astroCalc.inputWeight.setValue('150');
        await browser.pause(2000);
        await astroCalc.moonGet.click();
        await browser.pause(2000);
        await astroCalc.btnSubmit.click();
        await expect(astroCalc.outPut).toHaveTextContaining('If you were on Moon, you would weigh 24.83 lbs!')
    });
    
    
    // WELCOME TO ..........PAUSE TOWN
    it('should add a new planet and weight', async () => {
        await astroCalc.newPlanet.setValue('Spengo');
        await browser.pause(2000);
        await astroCalc.weightMulti.setValue('5');
        await browser.pause(2000);
        await astroCalc.addBtn.click();
        await browser.pause(2000);
        await astroCalc.spengoGet.click();
        await browser.pause(2000);
        await astroCalc.btnSubmit.click();
        await expect(astroCalc.outPut).toHaveTextContaining('If you were on Spengo, you would weigh 750.00 lbs!')
        await browser.pause(2000);
    });
});


