const express = require('express');
const EventRoutes = express.Router();

let Event = require('../models/events');


//Request get all events
EventRoutes.route('/').get(function(req,res){
   Event.find(function(err, event){
        if(err){
            console.log(err);
        }else{
            res.json(event);
        }
    });
});

//Request add new events
EventRoutes.post('/add', (req,res) => {
    const newevent = new Events({
        Topic: req.body.Topic,
        Date: req.body.Date,
        Time: req.body.Time,
        seats: req.body.seats,
        price: req.body.price
        
    });

    newevent
       .save()
       .then(() => res.json('The new Event posted successfully'))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find event by id
EventRoutes.get('/:id', (req, res) => {
    Event.findById(req.params.id)
       .then(event => res.json(event))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request find event by id and update
EventRoutes.put('/update/:id', (req, res) => {
        Event.findById(req.params.id)
          .then(event => {
              event.Topic = req.body.Topic;
              event.Date = req.body.Date;
              event.Time = req.body.Time;
              event.seats = req.body.seats;
              event.price = req.body.price;
    
              event
                .save()
                .then(() => res.json('The Event is Updated successfully'))
                .catch(err => res.status(400).json(`Error: ${err}`));
          })
          .catch(err => res.status(400).json(`Error: ${err}`));
    })


module.exports = EventRoutes;