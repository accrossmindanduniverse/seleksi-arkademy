const mongoose = require('mongoose');
const express = require('express');
require('dotenv/config');
const config = require('./src/config/global');
const routes = require('./src/routes');
const port = 3001;
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

mongoose.connect(
  `${config.mongoDB.protocol}://${config.mongoDB.baseURI}:${config.mongoDB.port}/${config.mongoDB.dbName}`,
  {useNewUrlParser: true, useCreateIndex: true},() => {
    console.log('database has connected!')
  }
);

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);
app.listen(port, () => console.log(`app run on port ${port}`));