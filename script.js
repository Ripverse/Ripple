// Add subtle ripple animation on button click
document.querySelector(".cta-btn").addEventListener("click", function(e) {
  let ripple = document.createElement("span");
  ripple.classList.add("ripple");
  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
