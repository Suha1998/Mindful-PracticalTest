const express = require ('express');
const cors = require('cors');
const bodyparser = require ('body-parser');
const app = express ();
const mongoose = require ('mongoose');
const port = process.env.PORT || 4000;


app.use(bodyparser.json());
app.use(cors());
app.use(
    bodyparser.urlencoded({
        extended: false
    })
);

const config = require ('./DB.js');

const EventRoutes = require('./routes/event');

mongoose
   .connect(config.DB,{ 
       useNewUrlParser : true,
       useCreateIndex : true,
       useUnifiedTopology : true
    })
   .then(() =>{console.log('Database is connceted successfully')},
err=>{console.log('Cannot connect to the database' +err)}
);


var Users = require('./routes/users.route');
app.use('/users', Users);

app.use('/event', EventRoutes);

app.listen(port, () => {
    console.log('Server is running on port:', port);
});









