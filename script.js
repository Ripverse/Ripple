// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Ripple effect for CTA button
document.querySelectorAll(".cta-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);
    setTimeout(() => { ripple.remove(); }, 600);
  });
});

// Signup Modal
const modal = document.getElementById("signup-modal");
const joinBtn = document.querySelector(".cta-btn");
const closeBtn = document.querySelector(".close");

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
document.querySelectorAll(".cta-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);
    setTimeout(() => { ripple.remove(); }, 600);
  });
});

// ========================
// Signup Modal
// ========================
const modal = document.getElementById("signup-modal");
const joinBtn = document.querySelector(".cta-btn");
const closeBtn = document.querySelector(".close");

if (joinBtn && modal && closeBtn) {
  joinBtn.addEventListener("click", () => { modal.style.display = "flex"; });
  closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
  window.addEventListener("click", e => { if (e.target == modal) modal.style.display = "none"; });
}

// ========================
// Stars Background
// ========================
const starsContainer = document.getElementById("stars");
if (starsContainer) {
  for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
    star.style.animationDuration = 1 + Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
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
// Ripple effect for ALL buttons
// ========================
document.querySelectorAll("button").forEach(button => {
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
// Like Buttons with Toggle
// ========================
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    const countSpan = this.querySelector(".like-count");
    let count = parseInt(countSpan.textContent);

    if (this.classList.contains("liked")) {
      this.classList.remove("liked");
      countSpan.textContent = count - 1;
    } else {
      this.classList.add("liked");
      countSpan.textContent = count + 1;
      this.classList.add("like-pop");
      setTimeout(() => this.classList.remove("like-pop"), 300);
    }
  });
});

// ========================
// Share Buttons
// ========================
document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", async function() {
    const postCard = btn.closest(".post-card");
    const content = postCard ? postCard.querySelector(".post-content")?.innerText : "";

    const shareData = {
      title: "Ripple 🌊",
      text: content || "Check out Ripple, a creative space for ideas and connection!",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Thanks for sharing!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareData.url);
      alert("🔗 Link copied to clipboard!");
    }
  });
});

// ========================
// Theme Toggle (Dark/Light Mode)
// ========================
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-theme");

    // Switch emoji 🌙 ↔ ☀️
    if (document.body.classList.contains("dark-theme")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
  });
}

// ========================
// Like Button Functionality
// ========================
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    let countSpan = this.querySelector(".like-count");
    let count = parseInt(countSpan.textContent);

    if (this.classList.contains("liked")) {
      this.classList.remove("liked");
      countSpan.textContent = count - 1;
    } else {
      this.classList.add("liked");
      countSpan.textContent = count + 1;
    }

    // Pop animation
    this.classList.add("like-pop");
    setTimeout(() => { this.classList.remove("like-pop"); }, 300);
  });
});

// ========================
// Share Button Functionality
// ========================
document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", async function() {
    const postCard = btn.closest(".post-card");
    const content = postCard.querySelector(".post-content").innerText;

    const shareData = {
      title: "Ripple 🌊",
      text: content,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Thanks for sharing!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(content);
      alert("🔗 Post content copied to clipboard!");
    }
  });
});

// Stars Background
const starsContainer = document.getElementById("stars");
if (starsContainer) {
  // Clear existing stars if any
  starsContainer.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");

    // Random position
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    // Random size (1-4px)
    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    // Random twinkle speed
    star.style.animationDuration = 1 + Math.random() * 3 + "s";

    starsContainer.appendChild(star);
  }
}

// Stories Scroll (optional: auto-scroll)
const storiesWrapper = document.querySelector(".stories-wrapper");
if(storiesWrapper) {
  let isDown = false;
  let startX;
  let scrollLeft;

  storiesWrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - storiesWrapper.offsetLeft;
    scrollLeft = storiesWrapper.scrollLeft;
  });
  storiesWrapper.addEventListener("mouseleave", () => isDown = false);
  storiesWrapper.addEventListener("mouseup", () => isDown = false);
  storiesWrapper.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - storiesWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    storiesWrapper.scrollLeft = scrollLeft - walk;
  });
}

// Floating post button click
const newPostBtn = document.getElementById("new-post-btn");
if(newPostBtn){
  newPostBtn.addEventListener("click", () => {
    alert("✨ Feature coming soon! Post your vibes here!");
  });
}

// Like button toggle
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", function(){
    const countSpan = this.querySelector(".like-count");
    let count = parseInt(countSpan.textContent);
    if(this.classList.contains("liked")){
      this.classList.remove("liked");
      countSpan.textContent = count - 1;
    } else {
      this.classList.add("liked");
      countSpan.textContent = count + 1;
    }
  });
});

