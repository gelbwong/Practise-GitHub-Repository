let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
// write your code here

const city = prompt("Enter a city:").toLowerCase().trim();
let uppercaseCity = city.charAt(0).toUpperCase() + city.slice(1);

if (weather.hasOwnProperty(city)) {
  const { humidity } = weather[city];
  const { temp } = weather[city];
  alert(
    `It is currently ${Math.round(
      temp
    )}°C in ${uppercaseCity} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
