const express = require('express');
const morgan = require('morgan');
const createerrors = require('http-errors');

const Authroute = require('./Routes/Auth.route')

require('dotenv').config()

const app = express()

app.use(morgan('dev'))

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res, next) => {
    res.send('yoo');
});

app.use('/auth', Authroute);

// Unspecified route
app.use(async (req, res, next) => {
    // const error = new Error('Page NOT Found');
    // error.status = 404;
    // next(error);
    next(createerrors.NotFound('page not found'));
});

app.use((err, req, res, next) => {
    res.status = err.status || 500;
    res.send({
        error : {
            status: err.status || 500,
            message: err.message
        }
    })
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
});