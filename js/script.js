const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName ('links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

function submitButton(){
  window.dialog.close();
  alert("Thanks for signing up! We'll be in touch shortly.");
}
// dialog.show();
// dialog.hide();
//                    sticky nav bar idea
//  window.addEventListener("scroll", () => {
//    var header = document.querySelector("header");
//    header.classList.toggle("sticky", window.scrollY > 0);
//  })
