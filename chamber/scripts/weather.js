const weatherContainer = document.getElementById("weather");
const lat = 40.4168;
const lon = -3.7038;

async function fetchWeather() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const currentTemp = data.current_weather.temperature;
    const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Heavy showers",
  95: "Thunderstorm",
  99: "Thunderstorm with hail",
};

const currentCode = data.current_weather.weathercode;
const weatherDesc = weatherDescriptions[currentCode] || "Unknown";

    const forecastDates = data.daily.time.slice(1, 4);
    const tempsMax = data.daily.temperature_2m_max.slice(1, 4);
    const tempsMin = data.daily.temperature_2m_min.slice(1, 4);

    const forecastHTML = forecastDates.map((date, i) => {
      return `<li>${new Date(date).toLocaleDateString(undefined, { weekday: 'short' })}: 
        ${tempsMin[i]}°C – ${tempsMax[i]}°C</li>`;
    }).join("");

weatherContainer.innerHTML = `
  <p><strong>Current Temperature:</strong> ${currentTemp}°C</p>
  <p><strong>Condition:</strong> ${weatherDesc}</p>
  <p><strong>3-Day Forecast:</strong></p>
  <ul>${forecastHTML}</ul>
    `;
  } catch (err) {
    console.error("Failed to load weather:", err);
    weatherContainer.innerHTML = "<p>Error loading weather data.</p>";
  }
}

fetchWeather();
