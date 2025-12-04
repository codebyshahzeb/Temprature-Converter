function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unit = document.getElementById('unit').value;
    const result = document.getElementById('result');

    if (tempInput === "") {
        result.innerHTML = "❌ Please enter a temperature!";
        return;
    }

    let converted;

    if (unit === "CtoF") {
        converted = (parseFloat(tempInput) * 9/5) + 32;
        result.innerHTML = `${tempInput}°C = ${converted.toFixed(2)}°F`;
    } else {
        converted = (parseFloat(tempInput) - 32) * 5/9;
        result.innerHTML = `${tempInput}°F = ${converted.toFixed(2)}°C`;
    }
}
