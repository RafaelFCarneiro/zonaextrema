'use strict';

export class Kinds {
    constructor(app, models) {
        this.app = app;
        this.models = models;

        app.get('/kinds', function(req, res){

            models.Kind.findAll()
                       .then(function(kinds) {

                         res.send( kinds );

                        });

        });        

    }
}