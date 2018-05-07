var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    employeeId: {type: String, required: true}
});

module.exports = mongoose.model('User', schema);