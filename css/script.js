const menuOnclick = document.querySelector('.header-menu-onclick')
const openedMenu = document.querySelector('.clickMenu')

const btnClose = document.querySelector('.btnClose')

menuOnclick.addEventListener('click', menuClick)
btnClose.addEventListener('click', closeMenu)

function menuClick() {
    openedMenu.style.display = 'block'
}

function closeMenu() {
    openedMenu.style.display = 'none'
}