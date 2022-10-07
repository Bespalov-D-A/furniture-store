const mobileMenu = () => {
  const mobileNavBtn = document.getElementById('mobile-nav-btn')
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const nav = document.getElementById('header-nav')
  const menu = document.getElementById('header-menu')

  const openNav = () => {
    nav.classList.toggle('header-nav--d-block')
  }

  const openMenu = () => {
    menu.classList.toggle('header-menu--d-block')
  }

  mobileNavBtn.addEventListener('click', openNav)
  mobileMenuBtn.addEventListener('click', openMenu)
}

module.exports = mobileMenu
