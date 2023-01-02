const mongoose = require('mongoose');

const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderName: {
        type: String,
    },
    orderDescription: {
        type: String,
    },
    email: { 
        type: String,
    },
});

   const Order = mongoose.model('order', orderSchema);
   module.exports = Order;

  
