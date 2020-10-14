const menus = document.querySelectorAll('.menu__link')

for (var i = 0; i < menus.length; i++) {
    if (menus[i].href == document.URL) {
        menus[i].classList.add('clicked');
    }
}