function handlePhoneClick(event) {
  // Check if device is desktop (no touch support)
  if (!("ontouchstart" in window)) {
    event.preventDefault();
    // Copy number to clipboard instead on desktop
    navigator.clipboard
      .writeText("+919894128038")
      .then(() => {
        alert("Phone number copied to clipboard: +91 9894128038");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
        // Fallback for browsers that don't support clipboard API
        alert("Please call us at +91 9894128038");
      });
  }
  // On mobile devices, the default tel: action will happen
}

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");

  // Check if the element exists to avoid errors
  if (backToTop) {
    // Show button when user scrolls down 300px from the top
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    // Scroll to top when button is clicked
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Add this JavaScript code to your script.js file or include it in a <script> tag at the bottom of your HTML

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the offer box element
//   const offerBox = document.getElementById("offer-box");

//   // Check if the offer has been closed before
//   const isOfferBoxClosed = localStorage.getItem("offerBoxClosed");

//   // Function to show the offer box
//   function showOfferBox() {
//     if (!isOfferBoxClosed) {
//       // Make the offer box visible first
//       offerBox.style.display = "flex";

//       // Use setTimeout to allow the display change to take effect before changing opacity
//       setTimeout(function () {
//         offerBox.style.opacity = "1";
//         offerBox.classList.add("visible");
//       }, 10);
//     }
//   }

//   // Show the offer box after a slight delay
//   setTimeout(showOfferBox, 2000);

//   // Set up the close button functionality
//   const closeBtn = document.querySelector(".close-btn");
//   if (closeBtn) {
//     closeBtn.addEventListener("click", function () {
//       // Fade out the offer box
//       offerBox.style.opacity = "0";
//       offerBox.classList.remove("visible");

//       // Remember that the user has closed the offer box
//       localStorage.setItem("offerBoxClosed", "true");

//       // Hide the offer box after the transition
//       setTimeout(function () {
//         offerBox.style.display = "none";
//       }, 300);
//     });
//   }

//   // For testing: Add ability to reset the offer box (developers only)
//   window.resetOfferBox = function () {
//     localStorage.removeItem("offerBoxClosed");
//     location.reload();
//   };
// });
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the offer box element
//   const offerBox = document.getElementById("offer-box");

//   // Check if the offer box exists
//   if (!offerBox) {
//     console.error("Offer box element not found!");
//     return; // Exit if the element is not found
//   }

//   // Function to show the offer box
//   function showOfferBox() {
//     // Make the offer box visible first
//     offerBox.style.display = "flex";

//     // Use setTimeout to allow the display change to take effect before changing opacity
//     setTimeout(function () {
//       offerBox.style.opacity = "1";
//       offerBox.classList.add("visible");
//     }, 10);
//   }

//   // Check if the current page is the home page
//   if (document.body.classList.contains("home-page")) {
//     // Check if the offer box has been closed in this session
//     const isOfferBoxClosed = sessionStorage.getItem("offerBoxClosed");

//     // Show the offer box only if it hasn't been closed
//     if (!isOfferBoxClosed) {
//       // Show the offer box after a slight delay
//       setTimeout(showOfferBox, 2000);
//     }
//   }

//   // Set up the close button functionality
//   const closeBtn = document.querySelector(".close-btn");
//   if (closeBtn) {
//     closeBtn.addEventListener("click", function () {
//       // Fade out the offer box
//       offerBox.style.opacity = "0";
//       offerBox.classList.remove("visible");

//       // Remember that the user has closed the offer box
//       sessionStorage.setItem("offerBoxClosed", "true");

//       // Hide the offer box after the transition
//       setTimeout(function () {
//         offerBox.style.display = "none";
//       }, 300);
//     });
//   }

//   // For testing: Add ability to reset the offer box (developers only)
//   window.resetOfferBox = function () {
//     sessionStorage.removeItem("offerBoxClosed"); // Reset the session storage
//     location.reload(); // Reload the page
//   };
// });

document.addEventListener("DOMContentLoaded", function () {
  const offerBox = document.getElementById("offer-box");

  // Function to show the offer box
  function showOfferBox() {
    offerBox.style.display = "flex";
    setTimeout(() => {
      offerBox.style.opacity = "1";
      offerBox.classList.add("visible");
    }, 10);
  }

  // Check if the offer box has been shown in this session
  const isOfferBoxShown = sessionStorage.getItem("offerBoxShown");

  // Show the offer box only if it hasn't been shown yet
  if (!isOfferBoxShown) {
    setTimeout(showOfferBox, 2000); // Show after 2 seconds
    sessionStorage.setItem("offerBoxShown", "true");
  }

  // Close button functionality
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      offerBox.style.opacity = "0";
      offerBox.classList.remove("visible");
      setTimeout(() => {
        offerBox.style.display = "none";
      }, 300);
    });
  }
});

// Check if banner was already shown in the localStorag
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Get current page URL
  const currentUrl = window.location.pathname;

  // Loop through each link to find current page
  navLinks.forEach((link) => {
    // Get the link's href attribute
    const linkHref = link.getAttribute("href");

    // If the link URL matches the current page URL
    // Or if it's the home page and we're at the root
    if (
      linkHref === currentUrl ||
      (linkHref === "/" && (currentUrl === "/" || currentUrl === "/index.html"))
    ) {
      // Add active class to the parent li element
      link.parentElement.classList.add("active");
    } else {
      // Remove active class from non-matching links
      link.parentElement.classList.remove("active");
    }
  });
});

// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll("section");

// sections.forEach((section) => {
//   gsap.from(section, {
//     scrollTrigger: {
//       trigger: section,
//       start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
//       toggleActions: "play none none reverse", // Play on enter, reverse on leave
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     duration: 0.5, // Shorter duration for snappier feel
//     ease: "power1.out", // Smooth easing
//   });
// });
