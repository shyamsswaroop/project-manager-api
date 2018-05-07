var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    projectId: {type: String, required: true},
    projectName: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    priority: {type: String, required: true},
    numberOfTask: {type: String, required: true},
    managerId: {type: String, required: true},
    status: {type: String, required: true},
    managerName: {type: String, required: true}
});

module.exports = mongoose.model('Project', schema);