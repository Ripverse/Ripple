// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Ripple effect for CTA button
document.querySelector(".cta-btn").addEventListener("click", function(e) {
  let ripple = document.createElement("span");
  ripple.classList.add("ripple");
  this.appendChild(ripple);
  setTimeout(() => { ripple.remove(); }, 600);
});

// Signup Modal
const modal = document.getElementById("signup-modal");
const joinBtn = document.querySelector(".cta-btn");
const closeBtn = document.querySelector(".close");

joinBtn.addEventListener("click", () => { modal.style.display="flex"; });
closeBtn.addEventListener("click", () => { modal.style.display="none"; });
window.addEventListener("click", e => { if(e.target==modal) modal.style.display="none"; });

// Create 100 stars randomly
const starsContainer = document.getElementById("stars");
for(let i=0; i<100; i++){
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
  star.style.animationDuration = 1 + Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}
// Generate 100 twinkling stars
const starsContainer = document.getElementById("stars");
for(let i=0; i<100; i++){
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
  star.style.animationDuration = 1 + Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}
