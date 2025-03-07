document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let images = document.querySelectorAll(".slider img");

    images.forEach((img) => {
        let clone = img.cloneNode(true);
        slider.appendChild(clone);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let skills = document.querySelectorAll(".skill-item");

    skills.forEach(skill => {
        let percent = skill.getAttribute("data-percent");
        let circle = skill.querySelector(".skill-circle");

        circle.textContent = `${percent}%`;
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    emailjs.sendForm("service_xxxxxx", "template_xxxxxx", this)
        .then(function(response) {
            document.getElementById("form-status").textContent = "Message sent successfully! ✅";
        }, function(error) {
            document.getElementById("form-status").textContent = "Error! Please try again. ❌";
        });
});
