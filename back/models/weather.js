const mongoose = require('mongoose');


const weatherSchema = mongoose.Schema({
    date: {type: Date, require: true},
    temperature: {type: Number, require: true},
    creationDate: {type: Date, required: false},
    modificationDate: {type: Date, required: false}
})

module.exports = mongoose.model('Weather', weatherSchema);