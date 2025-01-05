
# API's App

## Overview

This project is a weather application that provides real-time weather data, popular places nearby, and the latest news about a specific city. The app uses multiple APIs to fetch data:

- **OpenWeather API** for weather information.
- **Foursquare API** for nearby places.
- **NewsAPI** for news articles related to the city.
- **openstreetmap** for MAP



The app is built using Node.js, Express.js, and EJS for templating.

## Features

- **Weather Information**: Displays temperature, humidity, pressure, wind speed, and more.
- **Nearby Places**: Lists popular places near the specified city, including categories, distance, and address.
- **Latest News**: Provides a list of news articles related to the city.

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- API keys for:
  - OpenWeather (for weather data)
  - Foursquare (for places data)
  - NewsAPI (for news data)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure API Keys:**

   Replace the placeholders in the `app.js` file with your actual API keys:

   ```js
   const weatherApiKey = 'your_openweather_api_key';
   const placesApiKey = 'your_foursquare_api_key';
   const newsApiKey = 'your_newsapi_api_key';
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## How to Use

1. Open the app in your browser.
2. Enter a city name in the search box and click "Get Weather."
3. The app will display the current weather data, nearby places, and news articles related to the city.

## API Usage Details

The app integrates three main APIs to provide its features:

### Weather API

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**:
  - `q`: The name of the city (required).
  - `units`: The unit of measurement for temperature (metric).
  - `appid`: Your OpenWeather API key.

### Foursquare Places API

- **Endpoint**: `https://api.foursquare.com/v3/places/search`
- **Parameters**:
  - `ll`: Latitude and longitude of the city.
  - `limit`: The number of places to return.

### News API

- **Endpoint**: `https://newsapi.org/v2/everything`
- **Parameters**:
  - `q`: The name of the city (required).
  - `apiKey`: Your NewsAPI key.

## Key Design Decisions

1. **API Integration**: The app fetches weather, places, and news data asynchronously using `axios`. This allows for real-time updates on the city’s weather and related data.
2. **Data Rendering**: Data from the APIs is rendered using EJS, which allows dynamic content generation based on the retrieved data.
3. **Map Integration**: The app uses Leaflet.js to display a map of the city’s location and nearby places.
4. **Error Handling**: If an error occurs while fetching data, a message is displayed to the user prompting them to try again.

## File Structure

- **app.js**: Main server-side logic and routes.
- **views/index.ejs**: Template for rendering the app's HTML.
- **public/**: Folder containing static assets like stylesheets and JavaScript files.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

This `README.md` provides clear instructions for setting up and using your Weather App, as well as explanations of the APIs and key design decisions.