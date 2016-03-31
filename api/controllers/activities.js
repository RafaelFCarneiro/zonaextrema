'use strict';

export class Activities {
    constructor(app, models) {
        this.app = app;

        app.get('/activities', function (req, res) {

            models.Activity.findAll({
                include: [
                    {
                        model: models.Kind
                    }
                ]
                //where: [
                //    {
                //        loggedAt: {
                //            $gt: "now()::date"
                //        }
                //    }
                //]
            }).then(function (activities) {

                res.send(activities);

            });

        });

    }
}