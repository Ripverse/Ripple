// ========================
// Smooth Scroll
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========================
// Ripple effect for CTA button
// ========================
document.querySelector(".cta-btn").addEventListener("click", function(e) {
  let ripple = document.createElement("span");
  ripple.classList.add("ripple");
  this.appendChild(ripple);
  setTimeout(() => { ripple.remove(); }, 600);
});

// ========================
// Signup Modal
// ========================
const modal = document.getElementById("signup-modal");
const joinBtn = document.querySelector(".cta-btn");
const closeBtn = document.querySelector(".close");

joinBtn.addEventListener("click", () => { modal.style.display = "flex"; });
closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
window.addEventListener("click", e => { if (e.target == modal) modal.style.display = "none"; });

// ========================
// Stars Background
// ========================
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 100; i++) {
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
  star.style.animationDuration = 1 + Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}

// ========================
// Placeholder Buttons (Community & Profile)
// ========================
document.querySelectorAll(".placeholder-btn").forEach(btn => {
  btn.addEventListener("click", function(e){
    e.preventDefault();
    alert("🚧 This page is under construction. Stay tuned!");
  });
});

// ========================
// Ripple effect for all buttons
// ========================
const rippleButtons = document.querySelectorAll(".ripple");

rippleButtons.forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-circle");
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
    circle.style.top = e.clientY - this.offsetTop - d / 2 + "px";

    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  });
});

// ========================
// Like Buttons with pop animation
// ========================
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    let text = btn.innerText; // e.g., "❤️ 12"
    let parts = text.split(" ");
    let count = parseInt(parts[1]) || 0;
    count++;
    btn.innerText = `❤️ ${count}`;

    // Add pop animation
    btn.classList.add("like-pop");
    setTimeout(() => {
      btn.classList.remove("like-pop");
    }, 300);
  });
});

// ========================
// Share Buttons
// ========================
const shareButtons = document.querySelectorAll(".share-btn");

shareButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const postCard = btn.closest(".post-card");
    const content = postCard.querySelector(".post-content").innerText;

    // Copy post content to clipboard
    navigator.clipboard.writeText(content).then(() => {
      btn.innerText = "Copied!";
      setTimeout(() => {
        btn.innerText = "Share";
      }, 1500);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  });
});

// ========================
// Like Buttons with Toggle
// ========================
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn => {
  let liked = false; // Tracks if the user has liked

  btn.addEventListener("click", () => {
    let text = btn.innerText; // e.g., "❤️ 12"
    let parts = text.split(" ");
    let count = parseInt(parts[1]) || 0;

    if (!liked) {
      count++;        // Increment count
      liked = true;   // Mark as liked
      btn.classList.add("like-pop");
    } else {
      count--;        // Decrement count
      liked = false;  // Mark as unliked
      btn.classList.add("like-pop");
    }

    btn.innerText = `❤️ ${count}`;

    setTimeout(() => {
      btn.classList.remove("like-pop");
    }, 300);
  });
});
