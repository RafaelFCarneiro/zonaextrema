import elasticsearch from 'elasticsearch';
import express from 'express';

const client = new elasticsearch.Client({ host: 'localhost:9200',  log: 'trace' });

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');

require('./api/controllers/index.js')(client, app);
require('./api/controllers/charts.js')(client, app);

app.listen(process.env.PORT || 8080);
