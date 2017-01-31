const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL 
const dbHost = 'mongodb://database/mean-docker';

// Conectarse a mongodb
mongoose.connect(dbHost);

// crear esquema mongoose
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// crear un modelo mongoose
const User = mongoose.model('User', userSchema);

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET usuarios */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* GET usuario 1 . */
router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* Crear un usuario */
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Usuario creado exitosamente'
        });
    });
});

module.exports = router;