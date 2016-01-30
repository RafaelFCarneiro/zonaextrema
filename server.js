var elasticsearch = require('elasticsearch');
var express = require('express');

var client = new elasticsearch.Client({ host: 'localhost:9200',  log: 'trace' });

var app = express();

require('./api/controllers/charts.js')(client, app);

app.listen(8080);