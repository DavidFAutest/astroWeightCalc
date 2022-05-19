const Page = require('./page');

class astroCalc extends Page {

    get h1 () {
        return $('h1');
    }
    
    get selectElement () {
        return $('#planets');
    }

    get moon () {
        return $('/html/body/form[1]/div/div[2]/select/option[7]');
    }// finish weight selector and method
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async moonWeight (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open () {
        return super.open('');
    }
}

module.exports = new astroCalc();
