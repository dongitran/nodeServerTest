const express = require('express');
const http = require("http");
const app = express();

const server =http.createServer(app);
const io = require("socket.io").listen(server);

const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');


const dotenv = require('dotenv');
dotenv.config();
