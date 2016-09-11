/**
 * Created by han on 16/9/10.
 */
var express = require('express');
var router = express.Router();



function loggedIn(req, res, next) {
       if (req.user) {
               next();
       } else {
           res.redirect('/login');
       }
}

router.get('/', loggedIn, function(req, res, next) {
    res.render('chat', {username : req.user.username  });
});

module.exports = router;
