const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }

  fs.writeFile(path, body, err => {
    if (err) throw err;

    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}.`);
  });
});