const data = require("../data");
const { API_KEY, BASE_URL } = require("../config/api-config");
const axios = require("axios");

const { city, zip } = data;
test("Test for Null Data", () => {
  expect(city).not.toBeNull();
  expect(zip).not.toBeNull();
});

test("Test Weather API Endpoint", () => {
  const url = `${BASE_URL}${city}&zip=${zip}&appid=${API_KEY}`;
  return axios
    .get(url)
    .then(response => {
      expect(response.data.list[0].weather[0]).toContain(
        "id",
        "main",
        "description"
      );
      expect(response.data.list[0].main).toContain(
        "temp",
        "tempMax",
        "pressure"
      );
    })
    .catch(error => console.log(error.message));
});
