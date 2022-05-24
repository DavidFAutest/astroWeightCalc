const Page = require('./page');

class astroCalc extends Page {

    get h1 () {
        return $('h1');
    }
    
    get selectElement () {
        return $('#planets');
    }

    get moonGet () {
        return $('//select/option[7]');
    }

    get spengoGet () {
        return $('//select/option[12]');
    }

    get inputWeight () {
        return $('#user-weight')
    }

    get btnSubmit () {
        return $('#calculate-button')
    }

    get outPut () {
        return $('#output')
    }

    get newPlanet () {
        return $('#planetName')
    }

    get weightMulti () {
        return $('#weightMultiplier')
    }

    get addBtn () {
        return $('#add-button')
    }
    
    // async moonClick () {
    //     await this.selectElement.click()
    // }

    async moonWeight (weight) {
        await this.moonGet;
        await this.inputWeight.setValue(weight);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new astroCalc();
