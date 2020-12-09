const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    Topic : {
        type: String
    },
    Date : {
        type: String
    },
    Time : {
        type: String
    },
   seats : {
        type: String
    },
    price : {
        type: String
    }
})

const Events = mongoose.model('events', EventSchema);

module.exports = Events;