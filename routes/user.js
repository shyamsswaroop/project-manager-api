var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/getAllUsers', function (req, res, next) {
    User.find()
        .exec(function (err, users) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj:  users
            });
        });
});



router.post('/updateUser', function (req, res, next) {
    console.log('New user save call received...');

    console.log('req.body.userId:' + req.body.userId);
    var user = new User({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        employeeId:  req.body.employeeId
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created and saved sucessfully',
            obj: result
        });
    });
});





module.exports = router;