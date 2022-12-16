// npm init -y
// npm install request
const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    const parse = JSON.parse(body);

    if (error) {
      callback(`Failed to request the cat details: ${error}`,null);
    }

    if (parse[0]) {
      callback(null, parse[0].description);
    } else {
      callback("Failed to find breed and information", null);
    }
  });
};


