(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.getElementById("menu");

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
    });

    function calculateBMI() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100;
        const result = document.getElementById("bmi-result");

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            result.innerHTML = "⚠️ Enter valid values!";
            return;
        }

        const bmi = (weight / (height * height)).toFixed(2);
        let category = "";

        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal weight";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";

        result.innerHTML = `✅ Your BMI is: <strong>${bmi}</strong> (${category})`;

        // Highlight the corresponding exercise card
        highlightExerciseCard(category);
    }

    function highlightExerciseCard(category) {
        const exerciseCards = document.querySelectorAll(".exercise-card");
        exerciseCards.forEach(card => card.classList.remove("highlight"));

        let index;
        switch (category) {
            case "Underweight": index = 0; break;
            case "Normal weight": index = 1; break;
            case "Overweight": index = 2; break;
            case "Obese": index = 3; break;
            case "Muscle Building": index = 4; break;
        }

        if (exerciseCards[index]) {
            exerciseCards[index].classList.add("highlight");
        }
    }

    function flipCard(event) {
        const card = event.currentTarget;
        if (card) card.classList.toggle("flipped");
    }

    function redirectToThankYou(event) {
        event.preventDefault();
        window.location.href = "thankyou.html";
    }

    document.addEventListener("DOMContentLoaded", function () {
        const bmiButton = document.querySelector("#bmi-calculator button");
        const contactForm = document.querySelector("#contact form");
        const exerciseCards = document.querySelectorAll(".exercise-card");

        if (bmiButton) bmiButton.addEventListener("click", calculateBMI);
        if (contactForm) contactForm.addEventListener("submit", redirectToThankYou);

        exerciseCards.forEach(card => {
            card.addEventListener("click", flipCard);
        });
    });

})();
