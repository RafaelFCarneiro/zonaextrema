'use strict';
  
export class Charts {
    constructor(app, models, client) {

        this.app = app;
        this.models = models;

        app.get('/charts', function(req, res){

            var logs = [];

            var query = req.param("query");

            console.log("Query", req.params);

            client.search({
              q: query
            }).then(function (resp) {

                logs = resp.hits.hits;
                res.send( logs );

            }, function (err) {
                console.trace(err.message);
            });

        });   

    }
}