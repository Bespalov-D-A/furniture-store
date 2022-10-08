const AOS = require('./library/aos.js')
const mobileMenu = require('./modules/mobile-menu.js')

const ready = () => {
  mobileMenu()
  AOS.init({ once: true })
}

document.addEventListener('DOMContentLoaded', ready)
