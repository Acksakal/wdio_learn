/*global describe, beforeEach, it */
import { expect, browser } from '@wdio/globals'
import { pages } from './../pom/pages/pages.js'

describe('Doctors page', () => {
    beforeEach(async () => {
        await pages('dashboard').open()
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open modal window for adding a new doctor', async () => {
        await pages('doctors').sideMenu.item('doctors').click()
        await pages('doctors').doctorsListHeader.addNewDoctorBtn.click()        
        const addNewDoctorModalWindow = await pages('doctors').newDoctorModal.rootEl
        await expect(addNewDoctorModalWindow).toBeDisplayed()
        await pages('doctors').newDoctorModal.cancelBtn.click()
    })

    it('Add a new doctor', async () => {       
        await pages('doctors').sideMenu.item('doctors').click()
        await pages('doctors').doctorsListHeader.addNewDoctorBtn.click()
        await pages('doctors').newDoctorModal.input('name').addValue('John Doe')
        await pages('doctors').newDoctorModal.input('phone').setValue(7777777777)
        await pages('doctors').newDoctorModal.input('email').addValue('anything@gmail.com')
        await pages('doctors').newDoctorModal.input('education').addValue('higher')
        await pages('doctors').newDoctorModal.saveBtn.click()        
        const newDoctorCard = await pages('doctors').specialistCard(8).rootEl
        await expect(newDoctorCard).toBeDisplayed()
        await expect(newDoctorCard.$('.name')).toHaveText('Dr. John Doe')
    })
})