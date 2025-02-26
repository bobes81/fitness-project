// Toggle Slide-Out Menu
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.style.right = menu.style.right === "0px" ? "-260px" : "0px";
  }
  
  // BMI Calculator
  function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("bmi-result");
  
    if (isNaN(weight) || isNaN(height) || height === 0) {
      result.innerHTML = "Please enter valid values!";
      return;
    }
  
    let bmi = (weight / (height * height)).toFixed(2);
    let interpretation = bmi < 18.5 ? "Underweight" :
                          bmi < 24.9 ? "Normal weight" :
                          bmi < 29.9 ? "Overweight" : "Obese";
  
    result.innerHTML = `Your BMI is: <strong>${bmi}</strong> (${interpretation})`;
  }
// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  // Flip exercise cards
  function flipCard(card) {
    card.classList.toggle("flipped");
  }
  function redirectToThankYou(event) {
    event.preventDefault(); // Zabrání odeslání formuláře na server
    window.location.href = "thankyou.html"; // Přesměruje na stránku "Thank You"
  }
      