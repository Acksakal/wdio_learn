import BaseComponent from './../common/base.comp.js'

class AddDoctorModalComponent extends BaseComponent {

    constructor() {
        super('//ejs-dialog[@role="dialog"]')
    }

    get saveBtn() {
        return this.rootEl.$('//button[text()="Save"]')
    }

    get cancelBtn() {
        return this.rootEl.$('//button[text()="Cancel"]')
    }

    /**
     * 
     * @param {string} 'name' | 'phone' | 'email' | 'education'
     * @returns {*}
     */

    input(name) {
        const selectors = {
            name: '//input[@name="Name"]',
            phone: '//input[@id="DoctorMobile"]',
            email: '//input[@name="Email"]',
            education: '//input[@name="Education"]'
        }
        return this.rootEl.$(selectors[name.toLowerCase()])
    }    
}

export default new AddDoctorModalComponent()