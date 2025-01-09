import BasePage from './base.page.js'
import { SpecialistCard, doctorsListHeader, newDoctorModal } from '../components/imports.js'


class DoctorsPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorsListHeader = doctorsListHeader
        this.newDoctorModal = newDoctorModal
    }

    specialistCard(id) {
        return new SpecialistCard(id)
    }
}

export default new DoctorsPage();