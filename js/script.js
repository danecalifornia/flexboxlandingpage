const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName ('links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
//                    sticky nav bar idea
//  window.addEventListener("scroll", () => {
//    var header = document.querySelector("header");
//    header.classList.toggle("sticky", window.scrollY > 0);
//  })
