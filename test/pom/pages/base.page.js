import { browser } from '@wdio/globals'
import { header, sideMenu } from '../components/imports.js'

export default class BasePage {

    constructor(url) {
        this.url = url
        this.header = header 
        this.sideMenu = sideMenu
    }

    async open() {
        await browser.url(this.url)
    }
}