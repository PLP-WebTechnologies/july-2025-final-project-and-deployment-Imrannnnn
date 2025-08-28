// DARK MODE
const toggleBtn = document.getElementById('darkToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
  });
}

// TYPING EFFECT
// TYPING EFFECT — loops consistently
const text = "Unlock Your Potential \nwith Nasiru Imran";
const typingText = document.getElementById("typing-text");

let index = 0;
let displayed = "";
let deleting = false;

if (typingText) {
  function typeEffect() {
    if (!deleting) {
      // typing forward
      const ch = text.charAt(index);
      if (ch === "\n") {
        displayed += "<br>";
      } else {
        displayed += ch
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      typingText.innerHTML = displayed;
      index++;

      if (index < text.length) {
        setTimeout(typeEffect, 100); // typing speed
      } else {
        // pause before deleting
        setTimeout(() => { deleting = true; typeEffect(); }, 2000);
      }
    } else {
      // deleting backwards
      if (displayed.endsWith("<br>")) {
        displayed = displayed.slice(0, -4); // remove <br>
        index--;
      } else {
        displayed = displayed.slice(0, -1);
        index--;
      }
      typingText.innerHTML = displayed;

      if (index > 0) {
        setTimeout(typeEffect, 60); // deleting speed
      } else {
        // restart typing
        deleting = false;
        displayed = "";
        index = 0;
        setTimeout(typeEffect, 800); // pause before typing again
      }
    }
  }

  // clear & start
  typingText.innerHTML = "";
  typeEffect();
}


// IMAGE SLIDER
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(n) {
  slides.forEach((slide, i) => slide.classList.remove('active'));
  slides[n].classList.add('active');
}
if (slides.length) {
  showSlide(slideIndex);
  prev.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });
  next.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 4000);
}

// FORM VALIDATION
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }
    alert("Form submitted successfully!");
    form.reset();
  });
}
