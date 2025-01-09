import BaseComponent from './../common/base.comp.js'

class ListHeaderComponent extends BaseComponent {

    constructor() {
        super('//div[@class="specialization-detail-wrapper"]')
    }

    get addNewDoctorBtn() {
        return this.rootEl.$('//button[text()="Add New Doctor"]')
    }
}

export default new ListHeaderComponent()