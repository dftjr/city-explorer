'Use strict';

console.log('Our first server');


const { response } = require('express');
// REQUIRE
// In out servers, we have to use 'require' instead of import. Here we will list the requirements for a server.
const express = require('express');
require('dotenv').config();

// Use 
// Once we have required something, we have to use it. This is where we'll assign the required file a variable. React does this in one step, express takes two.
const app = express;

// ROUTES
app.get('/', (request, response) => {
  response.send('Hello from our server')
});


app.get('*', (request, respond) => {
  let name = request.query.name;
  return response.send(`Hello!${name}`);
});

// CATCH ALL
app.get('*', (request, respond) => {
  response.send('These are not the droids you/re looking for')
});

// ERRORS

// LISTEN
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
