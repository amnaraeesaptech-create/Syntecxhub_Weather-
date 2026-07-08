const apiKey = "abcd1****************xyz89";

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // Console me response dekho

        if (!response.ok) {
            alert(data.message);
            return;
        }

        document.getElementById("city").innerText = data.name;
        document.getElementById("temp").innerText = `${data.main.temp} °C`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {
        console.log(error);
        alert("Something went wrong.");
    }
}