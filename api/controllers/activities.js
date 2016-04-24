'use strict';

export class Activities {
    constructor(app, models) {
        this.app = app;


        app.get('/activities/:id', function (req, res) {

            models.Activity.findById(req.params.id, {
                include: [
                    {
                        model: models.Kind
                    }
                ]
            }).then(function (activity) {

                res.send(activity);

            });

        });


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


        app.put('/activities/:id', function (req, res) {

          models.Activity.findById(req.params.id, {
              include: [
                  {
                      model: models.Kind
                  }
              ]
          }).then(function (activity) {

              activity.update({
                secret: false
              }).then(function() {
                res.send(activity);
              });

          });


        });

        app.post('/activities', function (req, res) {

            let model = req.body;

            models.Activity.create(model).then(function (activity) {
                res.send(activity);
            }).catch(function (err) {
                res.send(err);
            });

        });


        app.delete('/activities/:id', function (req, res) {

            let id = req.params.id;
            models.Activity.destroy({where: {id: id}}).then(function (activity) {
                res.send([]);
            }).catch(function (err) {
                res.send(err);
            });

        });

    }
}
