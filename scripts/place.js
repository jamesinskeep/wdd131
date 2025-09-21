document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

let temperature = 11; // degrees C
let windSpeed = 15; // km/h

document.getElementById('temperature').textContent = `${temperature}°C`;
document.getElementById('windSpeed').textContent = `${windSpeed} km/h`;

function calculateWindChill(temperature, windSpeed) {
  if (temperature > 10 || windSpeed < 5) {
    return temperature; // Wind chill equals temperature if conditions are outside the valid range
  }
  const v = windSpeed;
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(v, 0.16) + 0.3965 * temperature * Math.pow(v, 0.16);
  return Math.round(windChill * 10) / 10; // Round to 1 decimal place
}
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').textContent = `${windChill}°C`;

const condition = "Partly Cloudy"; // Example condition
document.getElementById('condition').textContent = condition;