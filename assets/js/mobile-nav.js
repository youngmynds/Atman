// // Improved toggle functionality with responsive handling
// document.addEventListener("DOMContentLoaded", function () {
//   // Get navbar elements
//   const navbarToggler = document.querySelector(".navbar-toggler");
//   const navbarCollapse = document.querySelector(".navbar-collapse");

//   // Create overlay element if it doesn't exist
//   if (!document.querySelector(".sidebar-overlay")) {
//     const overlay = document.createElement("div");
//     overlay.className = "sidebar-overlay";
//     document.body.appendChild(overlay);
//   }

//   const overlay = document.querySelector(".sidebar-overlay");

//   // Function to handle resize event
//   function handleResize() {
//     // If on desktop (viewport width >= 992px)
//     if (window.innerWidth >= 992) {
//       // Reset any inline styles that could be causing issues
//       navbarCollapse.style.transform = "";
//       navbarCollapse.classList.remove("show");
//       overlay.classList.remove("show");
//     }
//   }

//   // Listen for window resize
//   window.addEventListener("resize", handleResize);

//   // Run once on load
//   handleResize();

//   // Toggle functionality - simple and direct
//   navbarToggler.addEventListener("click", function (e) {
//     e.preventDefault(); // Prevent default behavior
//     e.stopPropagation(); // Stop event propagation

//     // Toggle the show class
//     if (navbarCollapse.classList.contains("show")) {
//       navbarCollapse.classList.remove("show");
//       navbarCollapse.style.transform = "translateX(-100%)";
//       navbarToggler.setAttribute("aria-expanded", "false");
//       overlay.classList.remove("show");
//     } else {
//       navbarCollapse.classList.add("show");
//       navbarCollapse.style.transform = "translateX(0)";
//       navbarToggler.setAttribute("aria-expanded", "true");
//       overlay.classList.add("show");
//     }
//   });

//   // Close when clicking on overlay
//   overlay.addEventListener("click", function () {
//     if (navbarCollapse.classList.contains("show")) {
//       navbarCollapse.classList.remove("show");
//       navbarCollapse.style.transform = "translateX(-100%)";
//       navbarToggler.setAttribute("aria-expanded", "false");
//       overlay.classList.remove("show");
//     }
//   });

//   // Close menu when clicking on nav links
//   const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function () {
//       if (
//         window.innerWidth < 992 &&
//         navbarCollapse.classList.contains("show")
//       ) {
//         navbarCollapse.classList.remove("show");
//         navbarCollapse.style.transform = "translateX(-100%)";
//         navbarToggler.setAttribute("aria-expanded", "false");
//         overlay.classList.remove("show");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const closeIcon = document.querySelector("#closeToggle");
  const navbarCollapse = document.getElementById("navbarNav");

  // Function to toggle between burger and close icon
  function toggleIcons() {
    if (navbarToggler.style.display === "none") {
      navbarToggler.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      navbarToggler.style.display = "none";
      closeIcon.style.display = "block";
    }
  }

  // When navbar toggler is clicked
  navbarToggler.addEventListener("click", function () {
    toggleIcons();
  });

  // When close icon is clicked
  closeIcon.addEventListener("click", function () {
    toggleIcons();

    // Collapse the menu
    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
    bsCollapse.hide();
  });

  // When the collapse event is fired (menu closed other ways)
  navbarCollapse.addEventListener("hidden.bs.collapse", function () {
    navbarToggler.style.display = "block";
    closeIcon.style.display = "none";
  });
});
