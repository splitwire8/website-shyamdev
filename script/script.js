// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add('navbarDark');
  }
  else {
    header.classList.remove('navbarDark');
  }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
  l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


// email form netlify

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

// document.getElementById('myform').reset();


