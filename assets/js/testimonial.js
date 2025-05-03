// document.addEventListener("DOMContentLoaded", function () {
//   const track = document.querySelector(".review-track");
//   const reviews = document.querySelectorAll(".review");
//   const prevBtn = document.querySelector(".prev-btn");
//   const nextBtn = document.querySelector(".next-btn");

//   let reviewWidth;
//   let currentIndex = 0;
//   let visibleReviews;
//   let maxIndex;
//   let autoScrollInterval;

//   // Function to calculate sizes and visible reviews based on screen width
//   function calculateSizes() {
//     // Get the width of a single review (including margins)
//     const review = reviews[0];
//     reviewWidth =
//       review.offsetWidth +
//       parseInt(window.getComputedStyle(review).marginLeft) +
//       parseInt(window.getComputedStyle(review).marginRight);

//     // Determine how many reviews are visible based on screen width
//     if (window.innerWidth <= 768) {
//       visibleReviews = 1;
//     } else if (window.innerWidth <= 992) {
//       visibleReviews = 2;
//     } else {
//       visibleReviews = 3;
//     }

//     // Calculate maximum index (how far we can slide)
//     maxIndex = reviews.length - visibleReviews;

//     // If we've gone past the new maxIndex, reset position
//     if (currentIndex > maxIndex) {
//       currentIndex = maxIndex;
//       updateTrackPosition();
//     }
//   }

//   // Function to update the track position
//   function updateTrackPosition() {
//     track.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;
//   }

//   // Move to the next review
//   function moveNext() {
//     if (currentIndex < maxIndex) {
//       currentIndex++;
//       updateTrackPosition();
//     } else {
//       // Reset to first position with a smooth transition
//       currentIndex = 0;
//       updateTrackPosition();
//     }
//   }

//   // Move to the previous review
//   function movePrev() {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateTrackPosition();
//     } else {
//       // Move to last position with a smooth transition
//       currentIndex = maxIndex;
//       updateTrackPosition();
//     }
//   }

//   // Start automatic sliding from right to left
//   function startAutoSlide() {
//     clearInterval(autoScrollInterval);
//     autoScrollInterval = setInterval(moveNext, 3000);
//   }

//   // Event listeners
//   prevBtn.addEventListener("click", function () {
//     movePrev();
//     clearInterval(autoScrollInterval);
//     startAutoSlide();
//   });

//   nextBtn.addEventListener("click", function () {
//     moveNext();
//     clearInterval(autoScrollInterval);
//     startAutoSlide();
//   });

//   // Pause on hover
//   track.addEventListener("mouseenter", function () {
//     clearInterval(autoScrollInterval);
//   });

//   track.addEventListener("mouseleave", function () {
//     startAutoSlide();
//   });

//   // Handle window resize
//   window.addEventListener("resize", function () {
//     calculateSizes();
//   });

//   // Initialize
//   calculateSizes();
//   startAutoSlide();
// });

// // Improved Offer Box functionality
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
// Modified JavaScript for one-direction continuous testimonial scrolling
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".review-track");
  const reviews = document.querySelectorAll(".review");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let reviewWidth;
  let scrollPosition = 0;
  let scrollSpeed = 1.0; // Reduced from 4.0 to 1.0 for smoother scrolling
  let isPaused = false;
  let animationId;
  let totalWidth;

  // Clone the reviews and append them to create a seamless loop
  function setupInfiniteScroll() {
    // Clone all reviews and append them to the track
    reviews.forEach((review) => {
      const clone = review.cloneNode(true);
      track.appendChild(clone);
    });
  }

  // Function to calculate sizes based on screen width
  function calculateSizes() {
    // Get the width of a single review (including margins)
    const review = reviews[0];
    reviewWidth =
      review.offsetWidth +
      parseInt(window.getComputedStyle(review).marginLeft) +
      parseInt(window.getComputedStyle(review).marginRight);

    // Calculate total width of original reviews section
    totalWidth = reviewWidth * reviews.length;

    // Adjust scroll speed based on screen size
    if (window.innerWidth <= 768) {
      scrollSpeed = 0.5; // Reduced from 2.0 to 0.5 for mobile
    } else {
      scrollSpeed = 1.0; // Reduced from 4.0 to 1.0 for desktop
    }
  }

  // Function to animate the continuous scroll
  function animateScroll() {
    if (!isPaused) {
      scrollPosition += scrollSpeed;

      // If we've scrolled past the width of all original reviews, reset position
      if (scrollPosition >= totalWidth) {
        // Reset to beginning for seamless loop
        scrollPosition = 0;

        // Apply the reset instantly
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;

        // Force a reflow before re-enabling transitions
        track.offsetHeight;
        track.style.transition = "transform 0.1s ease-out";

        // Start from beginning
        scrollPosition = 0;
      } else {
        // Apply the scroll position with smooth transition
        track.style.transform = `translateX(-${scrollPosition}px)`;
      }
    }

    animationId = requestAnimationFrame(animateScroll);
  }

  // Event handlers for buttons with more moderate speed changes
  function handleNextClick() {
    // Speed up the scrolling (2x faster now, down from 3x)
    scrollSpeed = scrollSpeed * 2.0;
    setTimeout(() => {
      scrollSpeed = scrollSpeed / 2.0;
    }, 2000); // Return to normal speed after 2 seconds
  }

  function handlePrevClick() {
    // Reverse direction briefly
    const originalSpeed = scrollSpeed;
    scrollSpeed = -scrollSpeed;
    setTimeout(() => {
      scrollSpeed = originalSpeed;
    }, 2000); // Return to normal speed after 2 seconds
  }

  // Event listeners
  prevBtn.addEventListener("click", handlePrevClick);
  nextBtn.addEventListener("click", handleNextClick);

  // Pause on hover
  track.addEventListener("mouseenter", function () {
    isPaused = true;
  });

  track.addEventListener("mouseleave", function () {
    isPaused = false;
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    // Recalculate dimensions and adjust
    calculateSizes();
  });

  // Initialize
  setupInfiniteScroll();
  calculateSizes();

  // Set initial styles
  track.style.transition = "transform 0.1s ease-out";

  // Start the animation after a small delay to ensure everything is loaded
  setTimeout(() => {
    animateScroll();
  }, 100);
});
