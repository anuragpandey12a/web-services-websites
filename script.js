// Reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  });
});

// Email protection
const emailUser = "emailopanurag924";
const emailDomain = "gmail.com";
const emailLink = document.getElementById("emailLink");

emailLink.href = `mailto:${emailUser}@${emailDomain}`;
emailLink.textContent = `${emailUser}@${emailDomain}`;

