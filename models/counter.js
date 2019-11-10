const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounterSchema = new Schema({
    _id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('CounterModel', COunterSchema);