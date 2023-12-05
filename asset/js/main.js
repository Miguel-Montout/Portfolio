const icons = document.querySelector('#icons')
const links = document.querySelectorAll("nav li")
const nav = document.querySelector('#nav_burger')

icons.addEventListener('click', (evt) =>{
    evt.preventDefault()
    nav.classList.toggle("active")
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('active')
    })
})
