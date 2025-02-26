// Zachytíme odeslání zprávy
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");
  
    // Přidáme uživatelskou zprávu do chatu
    chatBox.innerHTML += `<p><strong>Ty:</strong> ${userInput}</p>`;
  
    // Jednoduché odpovědi
    if (userInput.toLowerCase().includes("hello")) {
      chatBox.innerHTML += `<p><strong>Bot:</strong> "Hello, how are you?"</p>`;
    } else if (userInput.toLowerCase().includes("How are you?")) {
      chatBox.innerHTML += `<p><strong>Bot:</strong> "I'm ok, thank you for asking!"</p>`;
    } else {
      chatBox.innerHTML += `<p><strong>Bot:</strong>" I'm sorry, not sure if I understand"</p>`;
    }
  
    // Vymazání vstupu po odeslání
    document.getElementById("user-input").value = "";
  }
  // BMI calculator
  function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100; // Převod cm na metry
    let result = document.getElementById("bmi-result");

    if (isNaN(weight) || isNaN(height) || height === 0) {
        result.innerHTML = "Please enter valid weight and height!";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let interpretation = "";

    if (bmi < 18.5) {
        interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Overweight";
    } else {
        interpretation = "Obese";
    }

    result.innerHTML = `Your BMI is: <strong>${bmi}</strong> (${interpretation})`;
}
