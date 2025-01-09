import BaseComponent from "../common/base.comp.js";


export default class SpecialistCardComponent extends BaseComponent {

    constructor(id) {
        super(`//div[@id="Specialist_${id}"]`)
    }
}