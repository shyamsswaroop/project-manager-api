var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    taskId: {type: String, required: true},
    taskName: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    priority: {type: String, required: true},
    status: {type: String, required: true},
});

module.exports = mongoose.model('Task', schema);