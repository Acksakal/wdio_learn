import BaseComponent from "./base.comp.js";


class HeaderComponent extends BaseComponent {

    constructor() {
        super('//div[@class="planner-header"]')
    }

    get logoutBtn() {
        return this.rootEl.$('//span[text()="Logout"]')
    }
}

export default new HeaderComponent()