const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
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

// database connection
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log('[+] MongoDB connected!');
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// run
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[+] Server running on port ${PORT}`);
})