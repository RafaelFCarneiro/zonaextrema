module.exports = function(client, app) {

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

};