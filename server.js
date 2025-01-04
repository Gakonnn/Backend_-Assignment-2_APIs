const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { weather: null, places: null, events: null, news: null, error: null });
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const weatherApiKey = "9a15ba1068c19eafb5e4c0940dd501ab"; 
  const placesApiKey = "fsq3MIO5CBKdy21QBcXHYshMznmmgIhdoRU5COAdI9rt3zw=";
  const newsApiKey = "b762458c8ca047c7915a05a5cbf9b208"; 
  
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;

  try {
    const weatherResponse = await axios.get(weatherUrl);
    const weather = weatherResponse.data;

    const lat = weather.coord.lat;
    const lon = weather.coord.lon;
    const placesUrl = `https://api.foursquare.com/v3/places/search?ll=${lat},${lon}&limit=7`;

    const placesResponse = await axios.get(placesUrl, {
      headers: {
        Authorization: placesApiKey,
      },
    });
    const places = placesResponse.data.results;

    const newsUrl = `https://newsapi.org/v2/everything?q=${city}&apiKey=${newsApiKey}&pageSize=7`;    const newsResponse = await axios.get(newsUrl);
    const news = newsResponse.data.articles;
    res.render("index", { weather, places, news, error: null });

  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.render("index", { weather: null, places: null, events: null, news: null, error: "Error fetching data, please try again." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});