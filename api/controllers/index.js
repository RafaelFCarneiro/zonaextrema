var path = require('path');

module.exports = function(client, app) {
  app.get('/', function(req, res) {
    res.render('../views/index');
  });
}
