document.addEventListener("DOMContentLoaded", function () {
   // Search button functionality
   const searchButton = document.querySelector(".form-inline .btn");
   const searchInput = document.querySelector(".form-inline .form-control");

   searchButton.addEventListener("click", function (event) {
       event.preventDefault();
       const query = searchInput.value.trim();
       if (query !== "") {
           alert("Searching for: " + query);
       } else {
           alert("Please enter a search term.");
       }
   });

   // Navbar active link highlight
   const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
   navLinks.forEach(link => {
       link.addEventListener("click", function () {
           navLinks.forEach(nav => nav.classList.remove("active"));
           this.classList.add("active");
       });
   });

   // Highlight About Us section when scrolled
   const aboutSection = document.querySelector(".about");

   window.addEventListener("scroll", function () {
       const sectionTop = aboutSection.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;

       if (sectionTop < windowHeight * 0.75) {
           aboutSection.style.backgroundColor = "#d6d8db";
       } else {
           aboutSection.style.backgroundColor = "#e9ecef";
       }
   });
});