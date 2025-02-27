(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.getElementById("menu");
        const exerciseCards = document.querySelectorAll(".exercise-card");

        let currentlyFlippedCard = null;

        // Toggle hamburger menu
        if (hamburger && menu) {
            hamburger.addEventListener("click", () => {
                menu.classList.toggle("active");
            });

            document.addEventListener("click", (event) => {
                if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
                    menu.classList.remove("active");
                }
            });
        }

        // Flip exercise card and close previously opened one
        exerciseCards.forEach(card => {
            card.addEventListener("click", function () {
                if (currentlyFlippedCard && currentlyFlippedCard !== this) {
                    currentlyFlippedCard.classList.remove("flipped");
                }

                this.classList.toggle("flipped");
                currentlyFlippedCard = this.classList.contains("flipped") ? this : null;
            });
        });
    });

    /**
     * Calculate BMI and display result with category highlighting
     */
    function calculateBMI() {
        const weightInput = document.getElementById("weight");
        const heightInput = document.getElementById("height");
        const result = document.getElementById("bmi-result");

        if (!weightInput || !heightInput || !result) return;

        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            result.innerHTML = "⚠️ Please enter valid values!";
            return;
        }

        // Convert height from cm to meters if necessary
        if (height > 3) {
            height = height / 100;
        }

        const bmi = (weight / (height * height)).toFixed(2);
        const category = getBMICategory(bmi);

        result.innerHTML = `✅ Your BMI is: <strong>${bmi}</strong> (${category})`;

        highlightExerciseCard(category);
    }

    /**
     * Return BMI category based on value
     */
    function getBMICategory(bmi) {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 24.9) return "Normal Weight";
        if (bmi < 29.9) return "Overweight";
        return "Obese";
    }

    /**
     * Highlight corresponding exercise card based on BMI category
     */
    function highlightExerciseCard(category) {
        const exerciseCards = document.querySelectorAll(".exercise-card");
        exerciseCards.forEach(card => card.classList.remove("highlight"));

        let index;
        switch (category) {
            case "Underweight": index = 0; break;
            case "Normal Weight": index = 1; break;
            case "Overweight": index = 2; break;
            case "Obese": index = 3; break;
            case "Muscle Building": index = 4; break;
        }

        if (exerciseCards[index]) {
            exerciseCards[index].classList.add("highlight");
        }
    }

    /**
     * Redirect to Thank You page after form submission
     */
    function redirectToThankYou(event) {
        event.preventDefault();
        window.location.href = "thankyou.html";
    }

    /**
     * Attach event listeners after DOM loads
     */
    document.addEventListener("DOMContentLoaded", function () {
        const bmiButton = document.querySelector("#bmi-calculator button");
        const contactForm = document.querySelector("#contact form");

        if (bmiButton) bmiButton.addEventListener("click", calculateBMI);
        if (contactForm) contactForm.addEventListener("submit", redirectToThankYou);
    });

})();
