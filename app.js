const uri = "mongodb+srv://thiendong:123467890Aa@realmcluster.x9iyy.mongodb.net/ideaApp?retryWrites=true&w=majority";
const express = require('express');
const http = require("http");
const app = express();

const server =http.createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');


const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8080;  
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(uri)
.then(() => console.log('db connected'));

mongoose.connection.on('error', err => {
    console.log(`DB Error: ${err.message}`);
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
