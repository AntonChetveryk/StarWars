const axios = require("axios");
const queryString = require("query-string");
const BaseURL = "https://swapi.co/api/";

async function getInfo(info, option = {}) {
  try {
    const response = await axios.get(
      `${BaseURL}${info}?${queryString.stringify(option)}`
    );
    const result = response.data.results;
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default getInfo;
