const currentPage = location.pathname
const menuItems = document.querySelectorAll('nav .menus a')

for (item of menuItems){
    if (currentPage.includes(item.getAttribute('href'))){
        item.classList.add('active')
    }
}