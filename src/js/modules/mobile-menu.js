const mobileMenu = () => {
  const mobileNavBtn = document.getElementById('mobile-nav-btn')
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const nav = document.getElementById('header-nav')
  const menu = document.getElementById('header-menu')

  const openNav = () => {
    if (nav.classList.toggle('header-nav--visible')) {
      mobileNavBtn.classList.add('mobile-nav-icon--active')
    } else {
      mobileNavBtn.classList.remove('mobile-nav-icon--active')
    }
  }

  const openMenu = () => {
    menu.classList.toggle('header-menu--visible')
  }

  mobileNavBtn.addEventListener('click', openNav)
  mobileMenuBtn.addEventListener('click', openMenu)

  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(menu)
    const isBtn = e.composedPath().includes(mobileMenuBtn)

    if (!withinBoundaries && !isBtn) {
      if (menu.classList.contains('header-menu--visible')) {
        menu.classList.remove('header-menu--visible')
      }
    }
  })
}

module.exports = mobileMenu
