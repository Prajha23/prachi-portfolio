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

    let formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
        timestamp: new Date().toLocaleString()
    };

    fetch("https://sheetdb.io/api/v1/m002jzswpraxi", {  // 🛑 Yaha apni SheetDB API ka URL paste karo!
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("form-status").textContent = "Message stored successfully! ✅";
        this.reset();
    })
    .catch(error => {
        document.getElementById("form-status").textContent = "Error! Please try again. ❌";
    });
});
