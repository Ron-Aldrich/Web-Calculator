function calculateBMI() {
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const resultDiv = document.getElementById('result');
    
    if (!height || !weight || !age || !gender) {
        resultDiv.innerHTML = "Please fill in all fields.";
        return false;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    resultDiv.innerHTML = `Gender: ${gender}<br>Age: ${age}<br>BMI: ${bmi.toFixed(2)} (${category})`;
    return false;
}
