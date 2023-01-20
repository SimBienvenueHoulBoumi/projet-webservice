const express = require('express'); // framework
const helmet = require('helmet'); // Configure HTTP Headers
const bodyParser = require('body-parser'); // Parse the body in an object req.body
const mongoose = require('mongoose'); // Database
const compression = require('compression'); // Compression for quick server response

const dotenv = require('dotenv')

dotenv.config()

const app = express(); // creation de l'application grace au framework
app.use(helmet());
app.use(compression());

// Passby CORS errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, UserID, Email');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// ID et pw à cacher dans des variables d'environnement
const dbID = process.env.DB_ID;
const dbPW = process.env.DB_PW;
const DB = 'mongodb+srv://'+dbID+':'+dbPW+'@cluster0.r0p6vul.mongodb.net/webservices?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log('MongoDB ERROR CONNECT', err)
    });

app.use(bodyParser.json());

// import des routes
const userRoutes = require('./routes/user');
const weatherRoutes = require('./routes/weather');

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/weather', weatherRoutes);

// exportation pour être utilisé par d'autres fichiers
module.exports = app;


// navigator.storage et/ou window.sessionStorage et/ou window.localStorage et/ou cookies