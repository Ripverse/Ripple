// ========================
// Smooth Scroll for Anchors
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========================
// Ripple effect for ALL buttons
// ========================
document.querySelectorAll("button, .cta-btn").forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-circle");
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
    circle.style.top = e.clientY - this.offsetTop - d / 2 + "px";

    circle.addEventListener("animationend", () => circle.remove());
  });
});

// ========================
// Signup Modal
// ========================
const modal = document.getElementById("signup-modal");
const joinBtn = document.getElementById("open-signup");
const closeBtn = document.querySelector(".close");

if (joinBtn && modal && closeBtn) {
  joinBtn.addEventListener("click", () => modal.style.display = "flex");
  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
}

// ========================
// Stars Background
// ========================
const starsContainer = document.getElementById("stars");
if (starsContainer) {
  starsContainer.innerHTML = ""; // clear existing stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDuration = 1 + Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
}

// ========================
// Stories Scroll (drag to scroll)
// ========================
const storiesWrapper = document.querySelector(".stories-wrapper");
if(storiesWrapper) {
  let isDown = false;
  let startX, scrollLeft;

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
    const walk = (x - startX) * 2; // scroll speed
    storiesWrapper.scrollLeft = scrollLeft - walk;
  });
}

// ========================
// Floating Post Button
// ========================
const newPostBtn = document.getElementById("new-post-btn");
if(newPostBtn){
  newPostBtn.addEventListener("click", () => {
    alert("✨ Feature coming soon! Post your vibes here!");
  });
}

// ========================
// Like Button Toggle + Pop Animation (Fixed)
// ========================
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const countSpan = btn.querySelector('.like-count');
    let count = parseInt(countSpan.textContent);

    if(btn.classList.contains('liked')){
      countSpan.textContent = count - 1;
    } else {
      countSpan.textContent = count + 1;
    }

    // Toggle the liked state
    btn.classList.toggle('liked');
    
    // Remove the pop class if it exists to restart the animation
    btn.classList.remove('like-pop');
    
    // Trigger reflow to reset animation
    void btn.offsetWidth;
    
    // Add the pop class again
    btn.classList.add('like-pop');
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
      navigator.clipboard.writeText(shareData.url);
      alert("🔗 Link copied to clipboard!");
    }
  });
});

// ========================
// Dark/Light Theme Toggle
// ========================
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
  });
}
