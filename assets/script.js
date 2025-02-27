(function () {
    "use strict";

    /**
     * Toggle the hamburger menu visibility
     */
    function toggleMenu() {
        var menu = document.getElementById("menu");
        if (menu) {
            menu.classList.toggle("visible");
        }
    }

    /**
     * Calculate BMI and display result
     */
    function calculateBMI() {
        var weightInput = document.getElementById("weight");
        var heightInput = document.getElementById("height");
        var result = document.getElementById("bmi-result");

        if (!weightInput || !heightInput || !result) return;

        var weight = parseFloat(weightInput.value);
        var height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || height <= 0) {
            result.innerHTML = "Please enter valid values!";
            return;
        }

        var bmi = (weight / (height * height)).toFixed(2);
        result.innerHTML = "Your BMI is: <strong>" + bmi + "</strong> (" + getBMICategory(bmi) + ")";
    }

    /**
     * Return BMI category based on value
     */
    function getBMICategory(bmi) {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 24.9) return "Normal weight";
        if (bmi < 29.9) return "Overweight";
        return "Obese";
    }

    /**
     * Flip exercise card on click
     */
    function flipCard(event) {
        var card = event.currentTarget;
        card.classList.toggle("flipped");
    }

    /**
     * Redirect to Thank You page
     */
    function redirectToThankYou(event) {
        event.preventDefault();
        window.location.href = "thankyou.html";
    }

    /**
     * Attach event listeners after DOM loads
     */
    document.addEventListener("DOMContentLoaded", function () {
        var menuButton = document.querySelector(".hamburger");
        var bmiButton = document.querySelector("#bmi-calculator button");
        var contactForm = document.querySelector("#contact form");
        var exerciseCards = document.querySelectorAll(".exercise-card");

        if (menuButton) menuButton.addEventListener("click", toggleMenu);
        if (bmiButton) bmiButton.addEventListener("click", calculateBMI);
        if (contactForm) contactForm.addEventListener("submit", redirectToThankYou);

        exerciseCards.forEach(function (card) {
            card.addEventListener("click", flipCard);
        });
    });

})();
