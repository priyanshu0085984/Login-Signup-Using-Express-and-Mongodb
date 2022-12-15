const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const cors = require('cors');

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',signupRouter);
app.use('/login',loginRouter);

module.exports = app;