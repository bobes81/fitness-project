function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
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
