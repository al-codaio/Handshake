'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Agency = require('./model/agencies');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

//db config
var mongoDB = 'mongodb://handshake_admin:shakehand2017@ds149134.mlab.com:49134/heroku_025j5gzt';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

router.route('/agencies')
  .get(function(req, res) {
    Agency.find(function(err, agencies) {
      if (err)
        res.send(err);
      res.json(agencies)
    });
  })
  .post(function(req, res) {
    var agency = new Agency();
    agency.name = req.body.name;
    agency.city = req.body.city;
    agency.country = req.body.country;
    agency.contact_name = req.body.contact_name;
    agency.contact_phone = req.body.contact_phone;
    agency.contact_email = req.body.contact_email;
    agency.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Agency successfully added!' });
    });
  });


//update and delete methods below

// router.route('/comments/:comment_id')
// //The put method gives us the chance to update our comment based on the ID passed to the route
//  .put(function(req, res) {
//    Comment.findById(req.params.comment_id, function(err, comment) {
//      if (err)
//        res.send(err);
//      //setting the new author and text to whatever was changed. If nothing was changed
//      // we will not alter the field.
//      (req.body.author) ? comment.author = req.body.author : null;
//      (req.body.text) ? comment.text = req.body.text : null;
//      //save comment
//      comment.save(function(err) {
//        if (err)
//          res.send(err);
//        res.json({ message: 'Comment has been updated' });
//      });
//    });
//  })
//  //delete method for removing a comment from our database
//  .delete(function(req, res) {
//    //selects the comment by its ID, then removes it.
//    Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
//      if (err)
//        res.send(err);
//      res.json({ message: 'Comment has been deleted' })
//    })
//  });





//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});