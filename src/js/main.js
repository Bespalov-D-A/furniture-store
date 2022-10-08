const AOS = require('./library/aos.js')
const mobileMenu = require('./modules/mobile-menu.js')

const ready = () => {
  mobileMenu()
}

document.addEventListener('DOMContentLoaded', ready)
AOS.init({ once: true })
