const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const dropMenu = () => navbarLinks.classList.toggle('active');
const cruxMenu = () => toggleButton.class


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}
)

toggleButton.addEventListener('click', () => {
   toggleButton.classList.toggle('change')
}
)