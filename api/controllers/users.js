'use strict';

export class Users {
    constructor(app, models) {
      
        this.app = app;
        this.models = models;

        app.get('/login',
            function (req, res) {
                var messages = "";
                var flashs = req.flash();
                if (flashs.error) {
                    messages = flashs.error.join(" ");
                }
                res.render('login', {title: "Biohacking", messages: messages});
            });

        app.post('/login',
            app.get("passport").authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true})
        );

        app.get('/logout', function (req, res) {
            req.logout();
            res.redirect('/');
        });

        app.get("/register", function(req, res){
            var messages = "";
            var flashs = req.flash();
            if (flashs.error) {
                messages = flashs.error.join(" ");
            }
            res.render('register', {title: "Biohacking", messages: messages})
        });

        app.post("/register", function(req, res){

            models.User.findOne({
                where: {
                    username: req.body.username
                }
            }).then(function(user){

                if( !user ) {

                    user = models.User.build({
                        username: req.body.username,
                        email: req.body.email
                    });

                    user.setPassword(req.body.password, function(){
                        user.save().then(
                            function() {
                                res.redirect('/');
                            }
                        );
                    });
                }

            });



        });

    }
}