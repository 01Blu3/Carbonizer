// Express imported with web-server
// const favicon = require('serve-favicon');
// const { stat } = require('fs');
require('dotenv').config();

const path = require('path');
const express = require('express');
const sumroute = require('./utils/sumroute');
const textme = require('./utils/textme');
// const textme = require('./utils/textme');

// Starts express
const app = express();
const port = process.env.PORT || 3000;

// Defining paths for express
const publicDirectoryPath = path.join(__dirname, '../public');

// Adding favicon to express
// app.use(favicon(process.cwd() + '/public/img/favicon.ico'));

// Defining root for site
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Carbonizer',
  })
);

// Templating engine is preferable as can insert variables into HTML
// Express expects templates to be in a folder called 'views'
app.set('view engine', 'pug');

// Serve static files from the `public` folder
app.use(express.static(publicDirectoryPath));

app.get(`/carbonize`, (req, res) => {
  origins = req.query.origins;
  destination = req.query.destination;
  if (!origins || !destination) {
    return res.send({
      error: 'Unable to fullfill request. Try again',
    });
  }

  let loc = { origins, destination };

  sumroute(loc, (err, { base, timeText, mileText, meter, duration } = {}) => {
    if (err) return res.send({ err });
    res.send({ base, timeText, mileText, meter, duration });
  });
});

app.get(`/text`, (req, res) => {
  let msg = req.query.message;
  if (!req)
    return res.send({
      error: 'Message could not be sent',
    });
  textme(msg);
});

const server = app.listen(port, () =>
  console.log(`Express running -> PORT ${server.address().port}`)
);
