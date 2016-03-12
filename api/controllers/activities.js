'use strict';

export class Activities {
    constructor(app, models) {
        this.app = app;
        this.models = models;

        app.get('/activities', function(req, res){

            models.Activity.findAll()
                       .then(function(activities) {

                         res.send( activities );

                        });

        });        

    }
}