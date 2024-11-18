const submit = document.querySelector('.submit');
const show = document.querySelector('#show');

submit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents form submission/reload

    let height = parseFloat(document.getElementById('in1').value);
    let weight = parseFloat(document.getElementById('in2').value);

    if (isNaN(height) || isNaN(weight)) {
        show.innerHTML = "Please enter valid numbers for height and weight.";
        return;
    }

    const cal = weight / ((height / 100) * (height / 100));

    if (cal < 18.6) {
        show.innerHTML = `You are underweight: ${cal.toFixed(2)}`;
        alert("You are underweight");
    } else if (cal >= 18.6 && cal <= 24.9) {
        show.innerHTML = `You are in the normal range: ${cal.toFixed(2)}`;
        alert("You are in the normal range");
    } else {
        show.innerHTML = `You are overweight: ${cal.toFixed(2)}`;
        alert("You are overweight");
    }
});
