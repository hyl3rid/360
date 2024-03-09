const navFirstLink = document.querySelector(".navigation__split-section--first-link")
const navDropdown = document.querySelector(".navigation__dropdown-menu")
const navMobMenu = document.querySelector(".navigation__mobile-menu")
const navMobAside = document.querySelector(".navigation__mobile-aside")

function toggleModal() {
    navDropdown.classList.toggle("hidden")
}

function toggleAside() {
    navMobAside.classList.toggle("hidden-aside")
}

navFirstLink.addEventListener("click", toggleModal)
navMobMenu.addEventListener("click", toggleAside)