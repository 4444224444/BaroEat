  window.addEventListener("scroll", function () {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


const fallBoxes = document.querySelectorAll('.fall-box');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fallBoxes.forEach(box => box.classList.add('active'));
    } else {
      fallBoxes.forEach(box => box.classList.remove('active'));
    }
  });
}, { threshold: 0.3 });

observer.observe(document.querySelector('.fall-group'));
