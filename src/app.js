const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

// import routes
const routeAll = require('./routes/all.route');

// app init
const app = express();

// 3rd party middleware
app.use(morgan('tiny'));

// routes
app.use('*', routeAll);

// db init

// run
app.listen(process.env.PORT || 3001, () => {
    console.log('[+] Server running on port 3001')
})