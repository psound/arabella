'use strict';

require('dotenv').load();


import os from 'os';
import express from 'express';
import RoutesConfig from './config/routes.conf';
import DBConfig from './config/db.conf';
import Routes from './routes/index';


const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3333;


var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));

var server = app.listen(PORT);

import Socket from './commons/socket/socket-events';
var io = require('socket.io').listen(server);


RoutesConfig.init(app, express);
Routes.init(app, express.Router());
Socket.init(io);


console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
console.log(`enviroment: ${env}`);
