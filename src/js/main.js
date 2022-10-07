const mobileMenu = require('./modules/mobile-menu.js')

const ready = () => {
  return mobileMenu()
}

document.addEventListener('DOMContentLoaded', ready)
