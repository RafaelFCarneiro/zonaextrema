'use strict';

import { Kinds } from "./kinds.js";
import { Users } from "./users.js";
import { Activities } from "./activities.js";

export class Controllers {
  
  constructor(app, models, client) {
      
      app.get('/', function(req, res) {
        res.render('index', { user : req.user });
      });
      
      new Kinds(app, models);
      new Users(app, models);
      new Activities(app, models);
      
  }
  
}