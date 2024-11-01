/** @format */

// Function to check if an element is in the viewport

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Add animations when elements enter the viewport

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".scroll-animate");

  elements.forEach((element) => {
    if (isInViewport(element)) {
      const animation = element.dataset.animation; // Get the animation type
      element.classList.add("animate__animated", animation); // Add Animate.css classes
    }
  });
});

const contactBtn = document
  .getElementById("btn")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });
