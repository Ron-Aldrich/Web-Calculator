function createGradeInputs() {
    const numSubjects = document.getElementById('numSubjects').value;
    const container = document.getElementById('gradeInputsContainer');
    container.innerHTML = '';

    for (let i = 1; i <= numSubjects; i++) {
        const div = document.createElement('div');
        div.className = 'inputContainer';
        
        const label = document.createElement('label');
        label.className = 'labelField';
        label.innerText = `Grade for Subject ${i}:`;
        div.appendChild(label);
        
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'inputField';
        input.placeholder = `Enter grade for subject ${i}`;
        input.id = `grade${i}`;
        div.appendChild(input);
        
        container.appendChild(div);
    }
}

function calculateAverage() {
    const numSubjects = document.getElementById('numSubjects').value;
    let total = 0;
    let count = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const grade = parseFloat(document.getElementById(`grade${i}`).value);
        if (!isNaN(grade)) {
            total += grade;
            count++;
        }
    }

    const average = total / count;
    const result = document.getElementById('result');
    result.innerText = count > 0 ? `Average Grade: ${average.toFixed(2)}` : 'Please enter valid grades for all subjects.';
}

// Initialize the grade inputs on page load
document.addEventListener('DOMContentLoaded', createGradeInputs);
