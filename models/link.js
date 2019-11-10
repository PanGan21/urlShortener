const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CounterSchema = require('./counter');

const LinkSchema = new Schema({
    _id: {
        type: Number
    },
    url: {
        type: String,
        required: true
    }
});

LinkSchema.pre('save', async () => {
    const link = this;
    await CounterSchema.findByIdAndUpdate('count', { $inc: { count: 1 } }, { new: true, upsert: true }, (err, counter) => {
        if (err) {
            return err;
        }
        link._id = counter.count;
    })
    
})

module.exports = mongoose.model('LinkModel', LinkSchema);