// mongoose connection referenced from: 
require('dotenv').config();

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var albumsRouter = require('./routes/albums');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/albums', albumsRouter);

// mongoose.set('strictQuery', false)

// connect to MongoDB
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('connected to MongoDB')
        console.log(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

connectDB()

// mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@seventeenalbums.pwqiejl.mongodb.net/', {
//             useUnifiedTopology: true,
//             useNewUrlParser: true
//         })

module.exports = app;
