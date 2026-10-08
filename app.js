const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({message: 'Welcome to contact book application'});
});

const contactRouter = require('./app/routes/contact.route');
app.use('/api/contacts', contactRouter);

module.exports = app;