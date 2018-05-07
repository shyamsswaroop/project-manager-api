var express = require('express');
var router = express.Router();

var Project = require('../models/project');

router.get('/getAllProjects', function (req, res, next) {
    Project.find()
        .exec(function (err, projects) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj:  projects
            });
        });
});



router.post('/updateProject', function (req, res, next) {
    console.log('New Project save call received...');

    console.log('req.body.projectId:' + req.body.projectId);
    var project = new Project({
        projectId: req.body.projectId,
        projectName: req.body.projectName,
        startDate: req.body.startDate,
        endDate:  req.body.endDate,
        priority: req.body.priority,
        numberOfTask:  req.body.numberOfTask,
        managerId:  req.body.managerId,
        status: req.body.status,
        managerName:  req.body.managerName

    });
    project.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Project created and saved sucessfully',
            obj: result
        });
    });
});






module.exports = router;