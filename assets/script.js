document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const hamburger = document.querySelector(".hamburger");
    const menu = document.getElementById("menu");
    const bmiButton = document.querySelector("#bmi-calculator button");
    const contactForm = document.querySelector("#contact form");

    // Dark mode setup
    function toggleDarkMode() {
        const body = document.body;
        const icon = document.getElementById("darkModeIcon");
     
        // Přepnutí třídy pro dark mode
        body.classList.toggle("dark-mode");
     
        // Uložení do localStorage pro zapamatování nastavení
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("darkMode", "disabled");
            icon.classList.replace("fa-sun", "fa-moon");
        }
     }
     
     // Zachování nastavení při načtení stránky
     document.addEventListener("DOMContentLoaded", () => {
        const darkMode = localStorage.getItem("darkMode");
        const icon = document.getElementById("darkModeIcon");
     
        if (darkMode === "enabled") {
            document.body.classList.add("dark-mode");
            icon.classList.replace("fa-moon", "fa-sun");
        }
     });

    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    // BMI Calculator
    function calculateBMI() {
        const weightInput = document.getElementById("weight");
        const heightInput = document.getElementById("height");
        const result = document.getElementById("bmi-result");

        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value) / 100; // Convert cm to meters

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            result.textContent = "⚠️ Please enter valid values!";
            return;
        }

        const bmi = (weight / (height * height)).toFixed(2);
        result.textContent = `✅ Your BMI is: ${bmi}`;
    }

    if (bmiButton) bmiButton.addEventListener("click", calculateBMI);

    // Contact Form Redirect
    function redirectToThankYou(event) {
        event.preventDefault();
        window.location.href = "thankyou.html";
    }

    if (contactForm) contactForm.addEventListener("submit", redirectToThankYou);
});
