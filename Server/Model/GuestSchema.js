const mongoose = require('mongoose');

const Schema = mongoose.Schema

const guestSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
}, {timestamps: true});

   const Guest = mongoose.model('guest', guestSchema);
   module.exports = Guest;

  
