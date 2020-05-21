const data = require("./data");
const { getWeatherInfo } = require("./src");

data.forEach(info => {
  getWeatherInfo(info);
});
