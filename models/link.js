const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    _id: {
        type: Number
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('LinkModel', LinkSchema);