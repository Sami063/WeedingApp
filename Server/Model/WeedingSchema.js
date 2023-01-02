const mongoose = require('mongoose');

const Schema = mongoose.Schema

const weedingSchema = new Schema({
    hisName: {
        type: String,
    },
    herName: {
        type: String,
    },
    date: {
        type: String,
    },
    location: {
        type: String,
    },
    partySize: {
        type: Number,
    }
});

   const Weeding = mongoose.model('weeding', weedingSchema);
   module.exports = Weeding;
