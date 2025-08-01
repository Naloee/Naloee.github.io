const button = document.querySelector('button');

async function getCoordinates(city) {
    // encodeURIComponent(city) permet de gérern les espace et accent danss les noms de ville
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&addressdetails=1&limit=1`);
    const data = await response.json();

    let coords = '';
    let cityName = '';

    data.forEach(element => {
        
        coords = { lat: element.lat, lon: element.lon };
        const address = element.address;
        cityName = address.city || address.town || address.village || element.display_name.split(',')[0];
    });

    return { coords, cityName };
}

async function getWeather(lat, lon) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const data = await response.json();
    return data.current_weather.temperature;
}

async function weatherStation() {
    const city = document.getElementById('cityInput').value.trim();

    document.getElementById('city').textContent = 'Chargement...';
    document.getElementById('temperature').textContent = '-°C';
    document.getElementById('details').textContent = 'Mise à jour en cours...';
    document.getElementById('gps').textContent = '';

    try {
        const { coords, cityName } = await getCoordinates(city);
        document.getElementById('gps').textContent = `Coordonnées GPS: ${coords.lat}, ${coords.lon}`;

        const temperature = await getWeather(coords.lat, coords.lon);
        document.getElementById('city').textContent = cityName;
        document.getElementById('temperature').textContent = `${Math.round(temperature)}°C`;
        document.getElementById('details').textContent = 'Température actuelle';

    } catch (error) {
        document.getElementById('city').textContent = 'Ville non trouvée';
        document.getElementById('temperature').textContent = '-';
        document.getElementById('details').textContent = 'Vérifiez le nom de la ville';
        document.getElementById('gps').textContent = '';
    }
}

button.addEventListener('click', weatherStation);
