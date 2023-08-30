#! /usr/bin/env node

const express = require('express');
const path = require('path');
const port = 3001;
const app = express();
const cors = require('cors');

// serve static assets normally
app.use(express.static(__dirname + '/'));
app.use(cors());

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);