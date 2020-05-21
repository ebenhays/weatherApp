const axios = require("axios");

const { API_KEY, BASE_URL } = require("../config/api-config");

exports.getWeatherInfo = data => {
  const { city, zip } = data;

  const url = `${BASE_URL}${city}&zip=${zip}&appid=${API_KEY}`;

  axios
    .get(url)
    .then(response => {
      const { id, main, description } = response.data.list[0].weather[0];
      const {
        temp,
        temp_min,
        temp_max,
        pressure,
        sea_level,
        humidity
      } = response.data.list[0].main;

      console.log(`${city}
            datetime: ${response.data.list[0].dt_txt}
            id: ${id},
            main: ${main},
            description: ${description}
            =========================================
            temp:     ${temp},
            tempMax:  ${temp_max},
            tempMin:  ${temp_min},
            pressure: ${pressure},
            seaLevel: ${sea_level},
            humidity: ${humidity}

          `);
    })
    .catch(error => console.log(error.message));
};
