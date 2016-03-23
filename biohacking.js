import express from 'express';
import * as models from "./models";
import { Controllers } from "./api/controllers";

const app = express();

require('./config/express.js')(express, app, __dirname);
require('./config/passport.js')(express, app, __dirname, models);

new Controllers(app, models);

app.get('/*', function (req, res) {
    res.render('index', {user: req.user});
});

app.listen(process.env.PORT || 8080);

console.log("Listen at", process.env.PORT || 8080);