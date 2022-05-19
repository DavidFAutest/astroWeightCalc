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
        //     '');  //Work on full planet name list later, might be array
    });

});


