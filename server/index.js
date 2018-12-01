const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();


const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);


    //endpoints
    app.get('/lawns', controller.readAll);
    app.post('/lawn', controller.create);
    app.post('/user', controller.createUser);
    app.get('/lawn/:id', controller.readJob);
    app.put('/lawn/:id', controller.updateJob);
    app.put('/user/:id', controller.updateUser);
    app.delete('/lawn/:id', controller.delete)
    app.delete('/user/:id', controller.deleteUser)

    app.listen(3005, () => {
        console.log('listening on 3005')
    });

});