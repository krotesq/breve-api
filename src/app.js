const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// import routes
const routeAll = require('./routes/all.route');
const routeShort = require('./routes/short.route');

// app init
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 3rd party middleware
app.use(morgan('tiny'));
app.use(cors());

// routes
app.use('/v1/short', routeShort);
app.use('*', routeAll);

// db init

// run
app.listen(process.env.PORT || 3001, () => {
    console.log('[+] Server running on port 3001')
})