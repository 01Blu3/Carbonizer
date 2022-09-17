// Express imported with web-server
const path = require('path');
const express = require('express');
const { stat } = require('fs');
const app = express();
const port = process.env.PORT || 3000;
const favicon = require('serve-favicon');

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

const server = app.listen(port, () =>
  console.log(`Express running -> PORT ${server.address().port}`)
);

// Templating engine is preferable as can insert variables into HTML
// Express expects templates to be in a folder called 'views'
app.set('view engine', 'pug');

// Serve static files from the `public` folder
app.use(express.static(publicDirectoryPath));

app.get('/carbonize', (req, res) => {
  address = req.query.address;
});
