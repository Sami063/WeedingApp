const express = require('express'); // import express
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")

// Importing Guest, Reservation from Model/Schema
const Guest = require('./Model/GuestSchema'); 
const Order = require('./Model/OrderSchemas')
const Weeding = require('./Model/WeedingSchema');

app.use(cors()); // Important for fetching data/blocking
app.use(express.json()); // Reseive data from frontend as a json file

const PORT = 4000; // Backend port

// MongoDb ConnectionString
mongoose.connect('mongodb://127.0.0.1:27017/Reservation', { 
    useNewUrlParser: true
});

// Finding all Guests
app.get('/api/guests', (req, res) => {
    Guest.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        consle.log(err)
    })
})

// Guest Registration
app.post('/api/register', async (req, res) => {
    const {firstName, lastName, email} = req.body
    const guest = Guest({firstName, lastName, email})

    await guest.save()
    res.json(guest);
})

// Weeding: post req for creating new weeding
app.post('/api/weeding/create', async (req, res)=> {
    const {hisName, herName, date, location, partySize} = req.body;
    const weeding = Weeding({hisName, herName, date, location, partySize})

    await weeding.save();
    res.json(weeding);
})

// If the weeding exist we will increament the partySize by one

//----------------------------------------------------------------

// Weeding list
app.get('/api/get/weeding', (req, res) => {
    Weeding.find()
    .then((result) => {
        res.send(result)
        // console.log(res.result)
    })
    .catch((err) => {
        console.log(err)
    })
})

// Making orders
app.post('/api/order', async (req, res) => {
    const {orderName, orderDescription, email} = req.body
    const order = Order({orderName, orderDescription, email})

    await order.save()
    res.json(order);
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
}); 
