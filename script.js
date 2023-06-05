function clickMenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
        menu.style.margin = '30px'
        itens.style.display = 'grid'
        nav.style.position = 'relative'
        nav.style.height = '200px'
        img.style.height = '100px'
    }
    else{
        menu.style.display = 'none'
        nav.style.height = '100px'
        inicio.style.margin = '0'
        menu.style.margin = '0'
    }
}