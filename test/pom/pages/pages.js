import dashboardPage from './dashboard.page.js'
import doctorsPage from './doctors.page.js'

/**
 * 
 * @param {string} 'dashboard' | 'doctors"
 * @returns { dashboardPage, doctorsPage } instances
 */

function pages(name) {
    const items = {
        dashboard: dashboardPage,
        doctors: doctorsPage
    }
    return items[name.toLowerCase()]
}

export {
    dashboardPage,
    doctorsPage,
    pages
}