var express = require('express');
var router = express.Router();

var Task = require('../models/task');

router.get('/getAllTasks', function (req, res, next) {
    Task.find()
        .exec(function (err, tasks) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj:  tasks
            });
        });
});



router.post('/updateTask', function (req, res, next) {
    console.log('New task save call received...');

    console.log('req.body.taskId:' + req.body.taskId);
    var task = new Task({
        taskId: req.body.taskId,
        taskName: req.body.taskName,
        startDate: req.body.startDate,
        endDate:  req.body.endDate,
        priority: req.body.priority,
        status:  req.body.status
    });
    task.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Task created and saved sucessfully',
            obj: result
        });
    });
});


module.exports = router;