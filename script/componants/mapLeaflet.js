function Leafleat() {
  //call the map
  var map = L.map("map").setView([48.8566, 2.3522], 6);
  const mapClass = document.querySelector("#map").classList;
  let cities = [];
  mapClass.forEach((element) => {
    if (element.includes("mapContact")) {
      // Array of each city
      cities = [
        { name: "Agde", lat: 43.3134787, lon: 3.4771629 },
        { name: "Salon-de-Provence", lat: 43.6405237, lon: 5.0980225 },
        { name: "Saint-Nazaire", lat: 47.2733517, lon: -2.2138905 },
        { name: "Cassis.", lat: 43.2140359, lon: 5.5396318 },
      ];
    } else {
      cities = [{ name: "Mende", lat: 44.5180226, lon: 3.4991057 }];
    }
  });

  //init of element
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Function that connect to the api
  function getAirQuality(city) {
    var apiKey = "b9896fb0e0956a70f0dadc9664a6478f47d50942"; //Token
    var apiUrl = `https://api.waqi.info/feed/geo:${city.lat};${city.lon}/?token=${apiKey}`;
    //Call the fetch
    fetch(apiUrl)
      //wait the resolve
      .then((response) => response.json())
      //stock data
      .then((data) => {
        var airQuality = data.data.aqi;
        //Set up the pins
        var airQualityIcon = L.divIcon({
          iconSize: [30, 30],
        });
        // create the pins
        L.marker([city.lat, city.lon]).addTo(map);
      })
      .catch((error) => console.error("Erreur:", error));
  }
  //loop to each city
  cities.forEach((city) => {
    getAirQuality(city);
  });
}
Leafleat();
