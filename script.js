async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherBox = document.getElementById("weatherInfo");

    if (!city) {
        alert("Lütfen bir şehir adı girin!");
        return;
    }

    const apiKey = "aa0fa231ec03a4c63d3ff0bb3bdaa2b7"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            weatherBox.style.display = "block"; 
            weatherBox.innerHTML = `
                <h2>🌍 ${data.name}, ${data.sys.country}</h2>
                <p>🌡️ Sıcaklık: <strong>${data.main.temp}°C</strong></p>
                <p>☁️ Hava Durumu: <strong>${data.weather[0].description}</strong></p>
                <p>💧 Nem: <strong>${data.main.humidity}%</strong></p>
                <p>🌬️ Rüzgar Hızı: <strong>${data.wind.speed} m/s</strong></p>
            `;
        } else {
            weatherBox.style.display = "block";
            weatherBox.innerHTML = `<p style="color: yellow;">Şehir bulunamadı!</p>`;
        }
    } catch (error) {
        console.error("Hata oluştu:", error);
        weatherBox.style.display = "block";
        weatherBox.innerHTML = `<p style="color: red;">Veri alınırken bir hata oluştu.</p>`;
    }
}
