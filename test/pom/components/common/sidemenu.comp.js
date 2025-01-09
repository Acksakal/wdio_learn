import BaseComponent from './base.comp.js'

class SideMenuComponent extends BaseComponent {

    constructor() {
        super('//ejs-sidebar[@id="plannerSiderBar"]')
    }

    get name() {
        return this.rootEl.$('//p[@class="name"]')
    }

    item(param) {
        const selectors = {
            dashboard: '//span[@title="dashboard"]',
            schedule: '//span[@title="calendar"]',
            doctors: '//span[@title="doctors"]'
        }
        return this.rootEl.$(selectors[param.toLowerCase()])
    }
}

export default new SideMenuComponent()